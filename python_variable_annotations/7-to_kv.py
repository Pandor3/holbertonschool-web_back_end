#!/usr/bin/env python3
"""
This module will contain a function which will
take a string in int or float and then return its tuple
"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    This function will take several parameters in consideration
    and return its content according to specifications
    """

    return (k, float(v**2))
