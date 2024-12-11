#!/usr/bin/env python3
"""
This module will contain a function which will
provide stats about nginx logs which are stored
in mongoDB
"""


from pymongo import MongoClient


def function():
    """
    This function will provide stats about nginx logs
    which are stored in mongoDB.
    - it connects to the local mongo DB databases
    it also displays infos for the nginx collection
    - it counts the total number of logs
    - it counts the numbers of logs via HTTP methods
    such as GET, POST, PUT, PATCH, DELETE
    - it counts the number of status checks
    (GET requests via the path "/status")
    """

    client = MongoClient('mongodb://localhost:27017/')
    client.server_info()
    db = client["logs"]
    collection = db["nginx"]
    if collection is not None:
        total_logs = collection.count_documents({})
        print(f"{total_logs} logs")
        print("Methods:")
        for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
            count = collection.count_documents({"method": method})
            print(f"\tmethod {method}: {count}")

        check_status = collection.count_documents(
            {"method": "GET",
             "path": "/status"}
        )
        print(f"{check_status} status check")


if __name__ == "__main__":
    function()
