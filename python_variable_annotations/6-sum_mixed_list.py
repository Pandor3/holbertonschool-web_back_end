#!/usr/bin/env python3
"""
This module will contain a function which will
take a list of integers and float and then return its sum
"""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[float, int]]) -> float:
    """
    This function will return a mix of integers and floats
    """

    return sum(mxd_lst)
