#!/usr/bin/env python3
"""
This module will contain a function which will measure
the runtime that an asynchronous comprehension function takes
"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    This function measures the runtime of the asynchronous
    comprehension function and then returns the resulting time
    """
    start_time = time.time()
    await asyncio.gather(async_comprehension())
    end_time = time.time()
    return end_time - start_time
