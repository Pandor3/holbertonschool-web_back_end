#!/usr/bin/env python3
"""
This module will contain a function which will
create a coroutine which is derived from task 1
"""


import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    This function will create a coroutine which is
    derived from the task 1
    """

    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return [x for x in sorted(delays)]
