# SecureInsight

The goal of this platform is to provide consistent monitoring and incident management for a network administator, driven by an AI with deep learning for anomaly detection.

The application will provide a web and a mobile application interface.

## Prerequisite materials

For this project, we will use 3 machines/dockers.

One for the backend, one for the proxy, one for the AI.

## Proxy machine

This machine should provide authenticated entering and outgoing traffic.

There will be a middle-man job for each traffic coming through the proxy, which will feed the IA and provide reports to the backend server's API.

The proxy will be installed on the local network.

It can be configured with a **software firewall**, the method of bypass will be a whitelist for the ports, and a blacklist for the disallowed IP, we will use this open source project as a base for IP blocking : 

https://github.com/firehol/blocklist-ipsets

The IP list should be automatically updated as the repo is, so we stay up to date with the latest security measures.

## AI machine

This machine will be parametrized by the user's preference, and managed by a **queue** which will perform the tasks in order using a predefined thread number.

It should learn from user's input on alerts, for example a network administrator will be prompted if the alert is wrong, and if so the machine will try learning from it.

What the IA should do : 

- Receive network logs from the proxy.
- Preprocess the data
- Detect the anomalies using an **random forest** algorithm


The base will be trained into a **ISCX NSL-KDD** dataset, which is open-source and provide a range of variety of common attacks.

The dataset is made as follow :

    Duration
    Protocol Type
    Service
    Flag
    Source Bytes
    Destination Bytes
    Land (binary feature indicating if the connection is from/to the same host/port)
    Wrong Fragment (binary feature indicating wrong fragmented packets)
    Urgent (number of urgent packets)
    Hot (number of "hot" indicators)
    Failed Logins (number of failed login attempts)
    Logged In (binary feature indicating if successfully logged in)
    Number of Compromised Conditions
    Root Shell (binary feature indicating if root shell was obtained)
    Su Attempted (binary feature indicating if "su root" command attempted)
    Root Logins (number of root login attempts)
    Guest Logins (number of guest login attempts)
    Number of Access Files
    Number of Outbound Commands
    Is Hot Login (binary feature indicating if it is a "hot" login)
    Is Guest Login (binary feature indicating if it is a guest login)
    Count (number of connections to the same destination host as the current connection in the past 2 seconds)
    Srv Count (number of connections to the same service as the current connection in the past 2 seconds)
    Serror Rate (percentage of connections that have "SYN" errors)
    Srv Serror Rate (percentage of connections that have "SYN" errors to the same service)
    Rerror Rate (percentage of connections that have "REJ" errors)
    Srv Rerror Rate (percentage of connections that have "REJ" errors to the same service)
    Same Srv Rate (percentage of connections to the same service)
    Diff Srv Rate (percentage of connections to different services)
    Srv Diff Host Rate (percentage of connections to different hosts)
    DST Host Count (number of unique destination hosts in the past 2 seconds)
    DST Host Srv Count (number of unique destination host services in the past 2 seconds)
    DST Host Same SRC Port Rate (percentage of connections to the same source port as the current connection to the same destination host)
    DST Host Srv Diff Host Rate (percentage of connections to different hosts/services for the same destination host/service)
    DST Host Serror Rate (percentage of connections that have "SYN" errors to the same destination host)
    DST Host Srv Serror Rate (percentage of connections that have "SYN" errors to the same destination host/service)
    DST Host Rerror Rate (percentage of connections that have "REJ" errors to the same destination host)
    DST Host Srv Rerror Rate (percentage of connections that have "REJ" errors to the same destination host/service)
    Attack Type (classification label indicating the type of attack)
    Attack Class (classification label indicating the class of attack)


The machine will learn from administrator's inputs and new logs.
It should be possible to train it to new datas from the interface, by specifying the fields above or give it a CSV file.

## Backend

The backend will be a nodeJS one with the meteor framework.

It will use a REST API for communicating with the frontend, aside websockets (probably socket.io), for app-state refreshing.

We will send a state as follow (could be incremented on the needs) :

```ts
{ 
    "machines":[
        {
            "state":string, //connected/disconnected/deleted
            "ip":string,
            "name":string?, //hostname of the machine by default
            "last_action_at":string?,
            "users": string[]
            "alerts":[
                {
                    "name":string,
                    "class":string,
                    "description":string,
                    "from":number // User that raised the alert
                    "assignedTo": number[] // Currently assigned worker(s)
                }
            ],
        }
    ]
}
```

Once sent, we will send only the modifyed machines to gain in performance.

The service should be incrementable by using custom scripts/plugins.

We will provide 5 plugins by default, which will be:

- One filesystem scanner using the totalvirus API.
- Basic privilege escalation scan (SUID/sudo configuration/capabilities)
- Software/Kernel updates using exploitdb database
- The AI network analyser
- A process monitoring tool






