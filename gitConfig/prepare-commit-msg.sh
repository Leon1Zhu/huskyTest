#! /bin/bash

# filename=$(cat ~/patch-me/name)
# file=~/patch-me/$filename



# echo $file
# [ ! -e $file ] && echo "file no exit" && exit 2
 
# git am $file
 
# if [ $? != 0 ]
# then
#         echo "failed to apply patch, please apply it manually"
#         exit 1
# fi

echo "这里是自动生成的commit信息" >> $HUSKY_GIT_PARAMS

git push

