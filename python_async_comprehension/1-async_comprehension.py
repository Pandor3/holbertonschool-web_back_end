#!/usr/bin/env python3
"""
This module will contain an asynchronous function which will
collect 10 random numbers and then return them
"""

import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    This function will collect 10 random numbers and then return them
    """
    return [number async for number in async_generator()]
