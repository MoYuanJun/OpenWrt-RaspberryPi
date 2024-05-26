#!/bin/bash
username=moyuanjun
password=moyuanjun

apt-get install sudo adduser -y
adduser $username --gecos "First Last,RoomNumber,WorkPhone,HomePhone" --disabled-password

usermod -G sudo $username
su $username

Error: Validation Failed: {
  "resource":"Release",
  "code":"custom",
  "field":"pre_receive",
  "message":"pre_receive Sorry, branch or tag names starting with 'refs/' are not allowed."
  
  }, {"resource":"Release","code":"custom","message":"Published releases must have a valid tag"}
