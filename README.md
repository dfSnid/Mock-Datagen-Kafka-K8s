# Mock Data Producer app for Kafka

A NodeJS producer app that streams data to Kakfa Topics. A basic Kafka setup is also included.

## Pre-requisites and Installs

* Docker - (Mandatory)
* Minikube - minikube is a tool that lets you run Kubernetes locally. minikube runs a single-node Kubernetes cluster on your personal computer (including Windows, macOS and Linux PCs) so that you can try out Kubernetes, or for daily development work. Get [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/) and [minikube](https://minikube.sigs.k8s.io/docs/start/)

## Usage

To begin with, please run the following - 

```
export HOST_IP=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)

```
then - 

```
docker-compose up

```

To build up the producer image locally , go to path /service/producer and run the following - 

```
docker build -t producerapp .

```
### Run Container through Docker
Once the build is complete , run - 

```
docker run -e "HOST_IP=${HOST_IP}" producerapp:latest

```
### Run Container through K8s

Go through the following steps listed to run the app on kubernetes - 

```
minikube start                    #Start your Kubernetes cluster
```
```
kubectl get deployment            #Check all deployments
```
```
eval $(minikube docker-env)       #go into kube docker daemon
```
```
docker build -t producerapp .     #Build the image within minikube docker
```
```
minikube ssh                      #ssh into host
```
```
docker images                     #check here to ensure your container image is available 
```
```
kubectl apply -f producer-app-deployment      #instruct k8s to build your pod from yaml file and deploy
```

Now to check the messages coming through to the topics, run the following - 

```
kafkacat -b localhost:9092 -L  #Lists all topics and Brokers

kafkacat -b localhost:9092 -t Accounts-Topic  #CLI consumer for Accounts Topic. Gets Account Info

```

