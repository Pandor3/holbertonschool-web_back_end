#!/usr/bin/env python3
"""
This module will contain a function which will
search a document (topic) in a collection (mongo_collection)
and return its content as a list
"""


def schools_by_topic(mongo_collection, topic):
    """
    This function will search a document (topic) in a collection
    (mongo_collection) and return its content as a list
    """

    result = mongo_collection.find(
        {"topics": topic}
    )
    return list(result)
