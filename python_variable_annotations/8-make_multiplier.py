#!/usr/bin/env python3
"""
This module will contain a function which will
a float argument and return a function which will
multiply a float
"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    This function takes a float multiplier as an argument and returns
    a function that multiplies a float by the multiplier.
    """

    def fun_multiplier(value: float) -> float:
        return value * multiplier

    return fun_multiplier
