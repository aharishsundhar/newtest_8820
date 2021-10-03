#!bin/bash

APPLICATION='/newtest'

CUSTOMSERVICEPATH='../../../services/custom_services'

HELMPATH='../devops/local'


DESKTOPCODE='../../../application/client/desktop/newtest'
DESKTOPIMAGENAME='geppettotest/newtest-desktop:1.0'

echo "Started to build docker images for pod...."


build_appbuilder_image () {

cd $DESKTOPCODE
docker build -t $DESKTOPIMAGENAME .
if [ $? -eq 0 ]; then
    kind load docker-image $DESKTOPIMAGENAME
    echo "$DESKTOPIMAGENAME is successfully pushed"
else
    echo "Image $DESKTOPIMAGENAME-desktop:1.0 build failed"
fi

}


build_customservices(){

cd $CUSTOMSERVICEPATH

for d in * ; do
    
    echo "building : $d"
    cd $d
    if [ $? -eq 0 ]; then
        docker build -t geppettotest$APPLICATION-$d:1.0 .
        if [ $? -eq 0 ]; then
            echo "geppettotest$APPLICATION-$d:1.0 build succesfully"
            echo "Image loading into KIND...."
            # docker push geppettotest$APPLICATION-$d:1.0
            kind load docker-image geppettotest$APPLICATION-$d:1.0
            sleep 2
            cd ..
        else
            echo "geppettotest$APPLICATION-$d:1.0 build failed"
        fi        
    else
        echo "$d is not a folder!"
    fi
      
      done

}


clean_images(){

docker rmi -f $DESKTOPIMAGENAME

for d in * ; do
    docker rmi -f geppettotest$APPLICATION-$d:1.0
    if [ $? -eq 0 ]; then
        echo "geppettotest$APPLICATION-$d:1.0 deleted"
        cd ..
    else
        echo "error in deleting geppettotest$APPLICATION-$d:1.0"
    fi
done

}

helm_install () {

cd $HELMPATH
helm install --dry-run --debug ./helm
helm install --name newtest-8820 ./helm
if [ $? -eq 0 ]; then
    echo "App Deployment is Done"
else
    echo "App deployment is Failed, there is a problem with helm charts"
fi

}


build_appbuilder_image
build_customservices
clean_images
helm_install

