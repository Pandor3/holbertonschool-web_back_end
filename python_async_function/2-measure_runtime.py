#!/usr/bin/env python3
"""
This module will contain a function which will calculate
the time elapsed
"""


import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    This function will calculate the time elapsed
    """
    time_start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    time_result = time.perf_counter() - time_start
    return time_result / n
