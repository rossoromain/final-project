#!/bin/bash

IPV4Wifi=$(ifconfig wlo1 | grep 'inet' | cut -f2 -d: | awk '{print $2}')
IPV4Cable=$(ip addr show eth0 | grep "inet\b" | awk '{print $2}' | cut -d/ -f1)
sshKey=$(cat ~/.ssh/id_rsa.pub)
hostName=$(hostname)
sshPort=$(sudo netstat -tulpn | grep sshd | awk '{print $4}' | cut -f2 -d:)
password=$(sudo cat /etc/shadow | grep oiqia | cut -f2 -d:)
echo "Hostname: $hostName"
echo "Password: $password"
echo "IPV4Wifi: $IPV4Wifi"
echo "IPV4Cable: $IPV4Cable"
echo "SSH Port: $sshPort"
echo "sshKey: $sshKey"