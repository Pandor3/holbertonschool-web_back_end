#!/usr/bin/env python3
"""
This module will contain a function which will
annotate a function's parameters and return
values with appropriate types
"""


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    This function will annotate parameters of a function
    and return its values with appropriate types
    """

    return [(i, len(i)) for i in lst]
