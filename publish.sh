#!/usr/bin/expect  -f

spawn ssh www@192.168.103.4
expect "password:"
send "tcbj@2016\r"
# 等待登陆成功
expect "#"
send "rm -rf ~/web/test \r"
send "exit\r"

spawn scp -r dist www@192.168.103.4:~/web/test
expect "password:"
send "tcbj@2016\r"

interact
