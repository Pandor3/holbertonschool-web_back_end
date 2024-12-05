#!/usr/bin/env python3
"""
This module will contain a function which will
take 0-concurrent_coroutines.py in order to take 2 int
arguments it wil return the list of all delays in ascending order
"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    This async function will execute wait_random n times with a
    max_delay setting and it will return a list of delays in ascending
    order.
    """
    delay = []
    task = [wait_random(max_delay) for _ in range(n)]

    for finished_task in asyncio.as_completed(task):
        delayed = await finished_task
        inserted = False
        for i in range(len(delay)):
            if delayed < delay[i]:
                delay.insert(i, delayed)
                inserted = True
                break
        if not inserted:
            delay.append(delayed)
    return delay
