#!/bin/bash
username=moyuanjun
password=moyuanjun

apt-get install sudo adduser -y
adduser $username --gecos "First Last,RoomNumber,WorkPhone,HomePhone" --disabled-password

usermod -G sudo $username
su $username