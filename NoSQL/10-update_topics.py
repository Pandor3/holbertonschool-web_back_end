#!/usr/bin/env python3
"""
This module will contain a function which will update documents (topics)
in a collection (mongo_collection) and then return its modified content
"""


def update_topics(mongo_collection, name, topics):
    """
    This function will update documents (topics) in a
    collection (mongo_collection) and then return its
    modified content
    """

    result = mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    return result.modified_count
