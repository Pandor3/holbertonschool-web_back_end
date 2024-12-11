#!/usr/bin/env python3
"""
This module will contain a function which will be used to
insert a new document (kwargs) into a collection named "school"
(mongo_collection)
"""


def insert_school(mongo_collection, **kwargs):
    """
    The new document (kwargs) will be inserted in the collection
    "school" (mongo_collection) and it will return its id once it's done.
    """

    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
