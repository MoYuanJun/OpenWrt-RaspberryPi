#!/bin/bash
username=$1
password=$1

apt-get install sudo adduser -y
adduser $username --gecos "First Last,RoomNumber,WorkPhone,HomePhone" --disabled-password

usermod -G sudo $username
su $username