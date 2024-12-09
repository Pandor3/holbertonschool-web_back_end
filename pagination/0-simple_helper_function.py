#!/usr/bin/env python3
"""
This module will contain a function which will calculate
the start and the end point of an index.
"""


def index_range(page: int, page_size: int):
    """
    This function will calculate the start and end point of
    an index
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
