#!/usr/bin/env python3
"""
This module will contain a function which will be used
to list all documents in a collection
"""


def list_all(mongo_collection):
    """
    This function will be used to list all document in
    a collection (mongo_collection)
    """

    return list(mongo_collection.find())
