---
layout: post
title:  "An Introduction to TensorFlow"
date:   2017-03-26
author: "Liu Songxiang"
header-img: "img/post-bg-os-metro.jpg"
catalog: true
tag:
- TensorFlow 
- Machine Learining
- Deep Learning
comments: true
---
In this tutorial, I will first talk about some basic concepts in TensorFlow, and then I will elaborate the mechanics of TensorFlow using an example from TensorFlow, I will also digress to some machine learning notions like SGD, backpropagation and etc.

-----------

# What is TensorFlow?
TensorFlow is an open source software library for numerical computation using data flow graphs. It was originally developed by Google Brain Team to conduct machine learning and deep neural networks research, but the system is general enough to be applicable in a wide variety of other domains as well. The flexible architecture of TensorFlow allows to deploy different-size training and inference systems on a wide variety of different hardware platforms, such as single machines containing one or more GPU cards, Android and iOS.

# What is tensor?
Formally, tensors are multilinear maps from vector spaces to the real numbers ($V$ is vector space, and $V^*$ is dual space), that is
![](https://cdn-images-1.medium.com/max/800/1*Y7M2dNz0wchCnUhQVvFlPg.png)
In TensorFlow, a tensor can be represented as a multidimensional array of numbers (very similar to n-d array in NumPy). A tensor has its rank and shape, rank is its number of dimensions and shape is the size of each dimension. To see the block below for example.

~~~ python
3 # a rank 0 tensor; this is a scalar with shape []
[1. ,2., 3.] # a rank 1 tensor; this is a vector with shape [3]
[[1., 2., 3.], [4., 5., 6.]] # a rank 2 tensor; a matrix with shape [2, 3]
[[[1., 2., 3.]], [[7., 8., 9.]]] # a rank 3 tensor with shape [2, 1, 3]
~~~

TensorFlow uses tensor data structure to represent all data, only tensors are passes between operations in the computation graph. Tensor data structure in TensorFlow supports a variety of element types, including signed and unsigned integers ranging in size from 8 bits to 64 bits, IEEE float and double types, a complex number type, and a string type (an arbitrary byte array). Check the tables below for reference.

![](https://cdn-images-1.medium.com/max/800/1*nI1UJHr5awff5co6C63udg.png)

Although few people make comparison between TensorFlow and NumPy, they are quite similar. (Both are N-d array libraries). NumPy is the fundamental package for scientific computing with Python; it contains a powerful N-dimensional array object, sophisticated (broadcasting) functions and etc. I believe that most Python users can not live without NumPy. NumPy has N-d array support, but it does not offer methods to create tensor functions and automatically compute derivatives and no GPU support, this is also one of the main reason for TensorFlow’s existence. Below is the NumPy to TensorFlow dictionary, you may easily find that many keywords are very similar.

![](https://cdn-images-1.medium.com/max/800/1*c8vKRVnog07DK6D5WJ3f3Q.png)

# Programming model in TensorFlow
The big idea of a TensorFlow program is to express a numeric computation as a directed graph. The picture below is an example of computation graph, which represents the computation of $h = ReLU(Wx + b)$. This is a very classic component in many neural networks, which conducts an linear transformation of the input data and then feed to a linearity (rectified linear activation function in this case).
![](https://cdn-images-1.medium.com/max/800/1*zPnkNTgDFdNDTreGARovFQ.png)
The graph above represents a data-flow computation; each node is an operation which have zero or more inputs and zero or more outputs. Graph edges are tensors which flow between nodes. Clients typically construct a computational graph using one of the supported frontend languages such as Python and C++ and then launch the graph to a Session to execute (Session is a very important notion in TensorFlow, more about Session below).

Let’s look at the computation graph above in detail. We truncate the graph and leave out the part above the ReLU node, we then get the graph below, which is exactly represents the computation $h = ReLU(Wx + b)$.

![](https://cdn-images-1.medium.com/max/800/1*G9MXGOM2jWl3SOXuqRlV3A.png)

Now we are going to see what in the graph. We can view the graph as a system, which has inputs (the data $x$), output ($h$ in this case), stateful variables ($W$ and $b$)and a bunch of operations (matmul, add and ReLU). Let me introduce them one by one.

**Placeholders**: in order to feed input data to train the model or make inference, we must have a input port to the graph. Placeholders are nodes whose values are fed in at execution time. Typically we want to feed data inputs, labels and hyper-parameters(eg. dropout rate) to the model.

**Variables**: when we train a model, we use variables to hold and update parameters. Unlike many tensors flowing along the edges which do not survive past a single execution of the graph, a variable is a special kind of operation that return a handle to a persistent mutable tensor that survives across executions of a graph. In most machine learning models, there are many parameters we have to learn, which update during training. Variables are stateful nodes which store parameters and output their current values from time to time. Their states are retained across multiple executions of a graph. For example, the values of this nodes will not update until a full step of training using a mini batch of data finishes.

**Mathematical operations**: In this graph, there are three types of math operations. *MatMul* operation multiplies two matrix values; *Add* operation adds element-wise (with broadcasting) and *ReLU* operation activates with element-wise rectified linear function.

Now lets implement this computation graph in Python codes by two phases, one of which is building the computation graph and the other is running the computation graph.

- **Building the computation graph:**

Variables must be explicitly initialized. When create a variable, we pass a tensor as its initial value to the `Variable()` constructor. The initializer can be constants, sequences and random values. In this case, we initialize the bias vector b by constants which are zeros, and initialize the weights matrix $W$ by random uniform. Note that all these ops require you to specify the shape of the tensors and that shape automatically becomes the shape of the variable. In this case, $b$ is a rank 1 tensor with shape (100, ) and $W$ is a rank 2 tensor with shape (784, 100).

When use a `tf.placeholder`, its data type is required explicitly, while the shape is optional. If the shape is not specified, we can feed a tensor of any shape.

``` python
import tensorflow as tf

b = tf.Variable(tf.zeros((100,))) 
W = tf.Variable(tf.random_uniform((784, 100), -1, 1)) 
x = tf.placeholder(tf.float32, (100, 784)) 
h = tf.nn.relu(tf.matmul(x, W) + b)
```

- **Running the computation graph**

To execute the computation, we must launch the graph to a `tf.Session`. What is a session? We can understand a session as an environment for running the graph. Actually, to do efficient numerical computing in Python, we typically use libraries like NumPy that do expensive operations such as matrix multiplication outside Python, using highly efficient code implemented in another language ( C ). Unfortunately, there can still be a lot of overhead from switching back to Python every operation. This overhead is especially bad if you want to run computations on GPUs or in a distributed manner, where there can be a high cost of transferring data.

TensorFlow also does its heavy lifting outside Python, but it takes things a step further to avoid this overhead. Instead of running a single expensive operation independently from Python, TensorFlow lets us describe a graph of interacting operations that run entirely outside Python.

TensorFlow relies on a highly efficient C++ backend to do its computation. The connection to this backend is called a session. The common usage for TensorFlow programs is to first create a graph and then launch it in a session.

In the codes below, by `sess = tf.Session()` we construct a Session object which encapsulates the environment in which Operation objects are executed, and Tensor objects are evaluated. Because no graph argument is specified when constructing the session, the default graph will be launched in the session.

Variable initializers must be run explicitly before other ops in your model can be run. The easiest way to do that is to add an op that runs all the variable initializers, and run that op before using the model. Use `tf.global_variables_initializer()` to add an op to run variable initializers. Only run that op after you have fully constructed your model and launched it in a session.

When execute a graph in a session, the typical format is `sess.run(fetches,feeds)`. *Fetches* is a list of graph nodes which returns the output of these nodes. *Feeds* is a dictionary mapping from graph nodes to concrete values which specifies the value of each graph node given in the dictionary. The value returned by `run()` has the same shape as the fetches argument, where the leaves are replaced by the corresponding values returned by TensorFlow.

``` python
sess = tf.Session() 
sess.run(tf.initialize_all_variables()) 
sess.run(h, {x: np.random.random(100, 784)})
```

So what have we done so far? We have got some rough ideas about many basic concepts in TensorFlow. To implement the example graph, we first built a graph using variables and placeholders, then we deployed the graph onto a session, which is the execution environment. In the next part, we will see how to train and evaluate a simple feed-forward neural network for handwritten digit classification.

# An Example: Handwritten Digit Classification

In this part, we are going to use TensorFlow to train and evaluate a simple feed-forward neural network for handwritten digit classification using the classic MNIST data set. The MNIST database is a very classic dataset in the field of machine learning; it contains many grayscale 28x28 pixel images of handwritten digits. The task of this example is to classify the images to digits. Some of the images are like this:

![](https://cdn-images-1.medium.com/max/800/1*NfwlJhQ0ZeLzI34fjG68Yw.png)

We will deploy a two-hidden-layer neural network using TensorFlow. The structure of the model is like this:

![](https://cdn-images-1.medium.com/max/800/1*OP5E0hn3fooNBN-iUzjwPw.png)

It takes the images as inputs and builds on top of it a pair of fully connected layers with ReLU activation followed by a ten node linear layer specifying the output logits. The ReLU activation is defined as $f(x) = max(0,x)$, and it’s plot is as below.

![](https://cdn-images-1.medium.com/max/800/1*QeHx8KlxWbwL-FA42qtImA.png)

First we have to load the data: the codes below will download the dataset to the local training folder and then unpack it to return a dictionary of DataSet instances. The dataset contains a training set of 55000 images&labels, a validation dataset with 5000 images&labels, and a test set with 10000 images&labels. The training set is for training the model and the validation set is for iterative validation training accuracy and the test set is for final testing the model performance.

``` python
data_sets = input_data.read_data_sets(FLAGS.train_dir, FLAGS.fake_data)
```

In our example, we only have to feed the images and the labels to the computation graph. So we create two `tf.placeholder` ops that define the shape of the inputs. In our datasets, we have flatten every 28x28 image to 1-d array with shape (784, ). Hence the `images_paceholder` has the shape (batch_size, 784), the `labels_placeholder` has the shape (batch_size, ).

``` python
images_placeholder = tf.placeholder(tf.float32, shape=(batch_size, mnist.IMAGE_PIXELS))
labels_placeholder = tf.placeholder(tf.int32, shape=(batch_size))
```

We now at the stage of building the graph. The graph is built according to a 3-stage pattern:

- `inference()`: Builds the graph as far as is required for running the network forward to make predictions.
![](https://cdn-images-1.medium.com/max/800/1*fi4fsy748fHkJRTT6OW1OQ.png)
- `loss()`: Adds to the inference graph the ops required to generate loss.
![](https://cdn-images-1.medium.com/max/800/1*6gWWUcmvvEbEPYaHbGsqLQ.png)
- `training()`: Adds to the loss graph the ops required to compute and apply gradients.
![](https://cdn-images-1.medium.com/max/800/1*VB1z5jU7rasLecyILCO8mQ.png)

We are now to have a look at the codes.
The first hidden layer takes images as inputs, then does a linear transformation, followed by a ReLU activation. The second hidden layer has the same pattern. For the output layer, there only has a linear transformation computation. So we have three sets of weights and biases variables. To use the same variable names and avoid clash, we make each layer be created beneath a unique `tf.name_scope`, so the complete name for the weights variable in the first hidden layer is hidden1/weights. In the variable constructors, we use the `tf.truncated_normal` ops to initialize the weights (see Neural Networks Part 2: Setting up the Data and the Loss)and `tf.zeros` ops to initialize the biases.

``` python
# Hidden 1
  with tf.name_scope('hidden1'):
    weights = tf.Variable(
        tf.truncated_normal([IMAGE_PIXELS, hidden1_units],
                            stddev= math.sqrt(2.0) / math.sqrt(float(IMAGE_PIXELS))),
        name='weights')
    biases = tf.Variable(tf.zeros([hidden1_units]),
                         name='biases')
    hidden1 = tf.nn.relu(tf.matmul(images, weights) + biases)
```

In order to train our model, we need to define the cost or the loss to represent how far off out models is from desired outcome, We try to minimize that error, and the smaller the error margin, the better our model is. In many machine learning models, cross entropy loss is a very common way to measure how much the approximated distribution $Q(X)$ differs from a true distribution $P(X)$. Note that to reduce the cross entropy loss is equivalent to reduce the *K-L divergence*, see the equation below: the first term in the right-hand side of the equation is the entropy of $X$, which is a constant, and the second term is the cross entropy (including the minus sign). If the cross entropy is reduced, which means that the K-L divergence of $Q$ from $P$ decreases, the approximation performance gets better.
![](https://cdn-images-1.medium.com/max/800/1*bsrs4SgWidzWkKK4z65-Yg.png)

``` python
labels = tf.to_int64(labels)
cross_entropy = tf.nn.sparse_softmax_cross_entropy_with_logits(
      labels=labels, logits=logits, name='xentropy')
return tf.reduce_mean(cross_entropy, name='xentropy_mean')
```

Note that

``` python
labels_placeholder = tf.placeholder(tf.int32, shape=(batch_size))
```

**Digress to Minibatch Stochastic Gradient Descent**:

Well, what is ordinary gradient descent? It is a simple algorithm in which we repeatedly make small steps downward on an error surface defined by a loss function of some parameters. Ordinary Gradient Descent looks at all of the training set at a time and then accumulate the error information to undergo one step of parameter update. When we have a very large training set, the training set reading in process can be very slow and the update step becomes a computationally very expensive procedure. This is why SGD comes to play. When we have to do training on a large scale dataset, to make one update step, we just look at one or a few training examples instead of the entire training set. In the purest form, we estimate the gradient from just a single example at a time and it has been proved by practice that SGD convergences more quickly than ordinary gradient version. In deep learning, people commonly use the variant of SGD, called Mini-batch SGD, which works identically to SGD, except that we use more than one training examples to make each estimate of the gradient. In our case, we look at a batch_size of training examples in every training iteration.

In the codes above, we apply `sparse_softmax_cross_entropy_with_logits` on the unnormalized logits to compute the cross entropy. It defines as:
![](https://cdn-images-1.medium.com/max/800/1*T76ePYV0NeDgtUX0A7hFlg.png)
where $y$ is our predicted probability distribution, and $y’$ is the true distribution (the one-hot vector with the digit labels). Actually, the `sparse_softmax_cross_entropy_with_logits` method computes sparse softmax cross entropy between logits and labels, where logits is unscaled probability and labels vector must provide a single specific index for the true class. A common use case is to have logits of shape [batch_size, num_classes] and labels of shape [batch_size] . Note that if you want to compute the cross entropy of a probability distribution, that is, the unnormalized logits has went through the softmax method, you may use the `softmax_cross_entropy_with_logits`.

So far, we have defined the loss or the objective that we want to minimize. The last step before training is to tell the model how to minimize it. In TensorFlow, we can first create the gradient descent optimizer with the given learning rate (which is a hyper-parameter we have to tune), and then we add the training op to apply the gradient to minimize the loss. See the codes below. Actually, TensorFlow provides a variety of methods to compute gradients for a loss and apply gradients to variables, such as `Adagrad` and `Momentumgrad`. This example just uses the most basic one.

``` python
optimizer = tf.train.GradientDescentOptimizer(learning_rate)
global_step = tf.Variable(0, name='global_step', trainable=False)
train_op = optimizer.minimize(loss, global_step=global_step)
```

We have built the whole computation graph. TensorFlow provides a very powerful suite of visualization tools called *Tensorboard* to make it easier for us to understand, debug, and optimize TensorFlow programs. In our example, TensorBoard gives us the following computation graph if you launch the TensorBoard. We can zone into some of the nodes and see what TensorBoard has done for us.

![](https://cdn-images-1.medium.com/max/800/1*5NUEZVURrQb5SHzIg62A6A.png)

We add all `tf.Operation` objects, which represent units of computation and `tf.Tensor` objects, which represent the units of data flow between operations to the default graph. So now it’s ready to train the model! Remember that before we run this graph, we must launch it to a session.

``` python
# Tell TensorFlow that the model will be built into the default Graph.
  with tf.Graph().as_default():
```

``` python 
# Create a session for running Ops on the Graph.
  sess = tf.Session()
```

Note that before we get into the training iterations, we must first initialize all the variables in the graph, as up to now they are symbolic variables without any values. The `tf.global_variables_initializer` (This is just a shortcut for `variable_initializers(global_variables()))`, which collects all the variables from the graph and then returns an op that initializes the variables. After launch the graph in a session, we can run the returned op to initialize all the variables collected.

``` python
init = tf.global_variables_initializer()
sess.run(init)
```

So now we are to train the model, just as what I introduced in part 3, we slice up the training set to mini-batch and feed it to the graph for each training step. Note that when we run the training process by `sess.run()`, the train op should be included in the fetches because we have to activate this op to conduct one step of parameter update. You can of course fetch many other ops as you want to inspect the values of your ops and variables and all you have to do is to include them in the fetched list and the value tensors will be returned in a tuple. In our example, we fetch the `loss` op to record what’s going on when training.

``` python
images_feed, labels_feed = data_set.next_batch(FLAGS.batch_size,
                                                 FLAGS.fake_data)
feed_dict = {
      images_pl: images_feed,
      labels_pl: labels_feed,
  }
_, loss_value = sess.run([train_op, loss], feed_dict=feed_dict)                                
```

In practice, during training, the value of the loss tensor may become `NaN` if the model diverged, in which case we may have to stop training and think about what’s wrong in our model. In some cases where the loss no longer goes down after a long time of training, we may have to reduce the learning rate and make the loss goes down further. All of above things need us to check the training status and visualize it. In our example we print out the loss value every 100 iterations.

``` python
if step % 100 == 0:
  print('Step %d: loss = %.2f (%.3f sec)' % (step, loss_value, duration))
  summary_str = sess.run(summary, feed_dict=feed_dict)
  summary_writer.add_summary(summary_str, step)
  summary_writer.flush()
```

So here are the model parameters and the performance of the model.

![](https://cdn-images-1.medium.com/max/800/1*SU8ypoy0a-m23pMJ58Ty7w.png)

After `2000` steps of training, the final precision of the model on the test data is just `0.9002`, which is very bad compared to the state-of-the-art model (can get over `99.7%` accuracy). But after all, we have got the idea how to train and evaluate a machine learning model using TensorFlow!
One last thing to think about in this example is why can TensorFlow compute gradients automatically without any explicit user codes to specify. Actually, TensorFlow has built-in support for automatic gradient computation, which is the main reason for its existence. Let’s first look at how we do back-propagation in our example.

- **Forward pass to compute the cross entropy loss**

In this derivation, I will take one image for example and the image is represented by a flattened vector which has shape [728].

**Notation**: We use $x$ to represent the input image. We denote the input to each layer by $z_{j}^{(l)}$, and the output by $a_{j}^{(l)}$. Note that in the input layer, $x = z^{(1)}) = a^{(1)}$. We denote the weights and the bias between layer $l$ and layer $l+1$ by $W^{(l)}$ and $b^{(l)}$. $\hat y$ is the prediction with shape [10]. $y$ is the true label for that image, which is a one-hot vector with shape [10]. The cross entropy is denoted by $CE(y,\hat y)$.

The dimensions for all this items are:

$$
\begin{align*}
  x, z^{(1)}, a^{(1)} &\in R^{728}\\
  z^{(2)}, a^{(2)} &\in R^{128} \\
  z^{(3)}, a^{(3)} &\in R^{32} \\
  z^{(4)}, \hat y &\in R^{10} \\
  W^{(1)} \in R^{728 \times 128}, b^{(1)} &\in R^{128} \\
  W^{(2)} \in R^{128 \times 32}, b^{(2)} &\in R^{32} \\
  W^{(3)} \in R^{32 \times 10}, b^{(3)} &\in R^{10}
\end{align*}
$$

The forward pass is as below:

$$
\begin{align*}
  &a^{(1)} = x \\
  &z^{(2)} =  a^{(1)}  W^{(1)} +  b^{(1)}\\
  &a^{(2)} = ReLU(z^{(2)}) = max(z^{(2)}, 0) \\
  &z^{(3)} =  a^{(3)}  W^{(2)} +  b^{(2)}\\
  &a^{(3)} = ReLU(z^{(3)}) = max(z^{(3)}, 0) \\
  &z^{(4)} =  a^{(3)}  W^{(3)} +  b^{(3)}\\
  &\hat y = softmax(z^{(4)}) \\
  &CE(y, \hat y) = - \sum_{k=1}^{10}y_klog(\hat y_k)
\end{align*}
$$

- **Backpropagation**
In this part, I will denote the error information for layer $l$ by $\delta^{(l)}$.
For the true label $i$,

$$
\begin{align*}
  CE(y, \hat y) & = - \sum_{k=1}^{10}y_klog(\hat y_k) \\
                &= -log(\hat y_i) \\
                &= -log(\frac{exp(z_i^{(4)})}{\sum_{j=1}^{10}exp(z_j^{(4)})})\\
                &= -z_i^{(4)} + log(\sum_{j=1}^{10}exp(z_j^{(4)}))
\end{align*}
$$

So,

$$
\begin{align*}
  \frac{\partial CE(y,\hat y)}{\partial z_t^{(4)}} &= - \frac{\partial z_i^{(4)}}{\partial z_t^{(4)}} + \frac{z_t^{(4)}}{\sum_{j=1}^{10}exp(z_j^{(4)})}\\
 &=  - \frac{\partial z_i^{(4)}}{\partial z_t^{(4)}} + \hat y_t 
\end{align*}
$$

To write the result above in vector form, we get

$$
\begin{align*}
  \delta^{(4)} = \frac{\partial CE(y,\hat y)}{\partial z_t^{(4)}} = \hat y - y 
\end{align*}
$$

To compute  $\frac{\partial CE(y,\hat y)}{\partial W^{(3)}}$, we first look at element gradient. First note that

$$
\begin{align*}
  z_j^{(4)} = \sum_{i=1}^{32}a_i^{(3)}W_{ij}^{(3)} + b_j^{(3)}.
\end{align*}
$$

Hence,

$$
\begin{align*}
  \frac{\partial z_j^{(4)}}{\partial W_{ij}^{3}} = a_i^{(3)}
\end{align*}
$$

Using chain rule, we get

$$
\begin{align*}
  \frac{\partial CE(y,\hat y)}{\partial W_{ij}^{(3)}} = \frac{\partial CE(y,\hat y)}{\partial z_j^{(4)}}\cdot \frac{\partial z_j^{(4)}}{\partial W_{ij}^{(3)}} = \delta _j^{(4)}\cdot a_i^{(3)}
\end{align*}
$$

In matrix form this looks like

$$
\begin{align*}
  \left(
  \begin{array}{cccc}
     \delta_1^{(4)}a_1^{(3)} &  \delta_2^{(4)}a_1^{(3)} & \cdots & \delta_{10}^{(4)}a_1^{(3)} \\
    \delta_1^{(4)}a_2^{(3)} &  \delta_2^{(4)}a_2^{(3)} & \cdots & \delta_{10}^{(4)}a_2^{(3)} \\
    \vdots & \vdots & \ddots & \vdots \\
    \delta_1^{(4)}a_{32}^{(3)} &  \delta_2^{(4)}a_{32}^{(3)} & \cdots & \delta_{10}^{(4)}a_{32}^{(3)}
  \end{array}
\right) = (a_3^{(3)})^T \cdot \delta^{(4)}
\end{align*}
$$

Similarly, we can compute

$$
\begin{align*}
  \frac{\partial CE(y, \hat y)}{b^{(3)}} = \frac{\partial CE(y, \hat y)}{\partial z^{(4)}}\frac{\partial z^{(4)}}{\partial b^{(3)}} = \delta ^{(4)} \cdot I_{10\times 10} = \delta ^{(4)}
\end{align*}
$$

Now, we are going to compute $\frac{\partial CE(y, \hat y)}{\partial a^{(3)}}$, similarly, we first look at a simple element wise derivative:

$$
\begin{align*}
   z_j^{(4)} = \sum_{i=1}^{32}a_i^{(3)}W_{ij}^{(3)} + b_j^{(3)} \\
   \frac{\partial z_j^{(4)}}{\partial a_i^{(3)}} = W_{ij}^{(3)}
\end{align*}
$$

Using the chain rule, we obtain

$$
\begin{align*}
  \frac{\partial CE(y,\hat y)}{\partial a_i^{(3)}} = \sum_{j=1}^{10}\delta_j^{(4)}W_{ij}^{(3)}
\end{align*}
$$

So to vectorize:

$$
\begin{align*}
   \frac{\partial CE(y,\hat y)}{\partial a^{(3)}} = \delta^{(4)}\cdot (W^{(3)})^T
\end{align*}
$$

Then, we have to compute

$$
\begin{align*}
  \frac{\partial CE(y, \hat y)}{\partial z^{(3)}} &=  \frac{\partial CE(y, \hat y)}{\partial a^{(3)}} \circ \frac{\partial a^{(3)}}{\partial z^{(3)}} \\
  & = \delta^{(4)}\cdot (W^{(3)})^T \circ I(a^{(3)}>0)
\end{align*}
$$

where $I(a^{(3)}>0)$ is the indicator function.

So far, we have computed all the gradients for the hidden layer 2. Any other gradients can be calculated in similar way. Here I just give the final computation results for these other gradients.

$$
\begin{align*}
  \frac{\partial CE(y, \hat y)}{W^{(2)}} &= (a^{(2)})^T \cdot \delta^{(3)} \\
  \frac{\partial CE(y, \hat y)}{\partial b^{(2)}} &= \delta^{(3)} \\
\frac{\partial CE(y, \hat y)}{\partial a^{(2)}} &= \delta^{(3)}\cdot (W^{(2)})^T \\
\frac{\partial CE(y, \hat y)}{\partial z^{(2)}} &= \delta^{(3)} \circ I(a^{(2)}>0) \\
 \frac{\partial CE(y, \hat y)}{W^{(1)}} &= x^T \cdot \delta^{(2)} \\
  \frac{\partial CE(y, \hat y)}{\partial b^{(1)}} &= \delta^{(2)} 
\end{align*}
$$

So we have computed all the gradients for the gradient descent step to make one step of all the parameters during training. In the forward inference process, TensorFlow will add some nodes to store some intermediate values. During the gradient computation process, gradients will be computed from the loss to the input layer. This is the sugar that TensorFlow gives to us and also one of the main reason why it is so user-friendly. See the example below:
![](https://cdn-images-1.medium.com/max/800/1*UIfJ1ZxLhE-BJo7vdjY6XA.png)

# A short summary

In this tutorial, I first introduced some basic concepts in TensorFlow using a very simple computation graph, and then I elaborated the basic mechanics of TensorFlow programming using a handwritten digits classification problem. Finally I illustrate how TensorFlow can conduct automatic gradients computation for us.
So, have fun with TensorFlow! :) 

**Reference:**

[[1]Abadi, Martín, et al. “Tensorflow: Large-scale machine learning on heterogeneous distributed systems.” arXiv preprint arXiv:1603.04467 (2016).](https://arxiv.org/pdf/1603.04467.pdf)

[[2]https://www.tensorflow.org/get_started/mnist/mechanics](https://www.tensorflow.org/get_started/mnist/mechanics)

[[3]https://www.tensorflow.org/get_started/mnist/pros](https://www.tensorflow.org/get_started/mnist/pros)

[[4]https://github.com/tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)

[[5]http://cs231n.github.io/neural-networks-2/](http://cs231n.github.io/neural-networks-2/)

[[6]http://web.stanford.edu/class/cs224n/lectures/cs224n-2017-tensorflow.pdf](http://web.stanford.edu/class/cs224n/lectures/cs224n-2017-tensorflow.pdf)

[[7]http://web.donga.ac.kr/yjko/usefulthings/TensorFlow-Basic-Concept_Ko.pdf](http://web.donga.ac.kr/yjko/usefulthings/TensorFlow-Basic-Concept_Ko.pdf)

[[8]https://cs224d.stanford.edu/lectures/CS224d-Lecture7.pdf](https://cs224d.stanford.edu/lectures/CS224d-Lecture7.pdf)


