#!/usr/bin/env python3
"""
This module will contain an asynchronous function which will generate
random numbers for 10 loops and then wait 1 second between each loop
"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    This function will asynchronously generate random numbers during
    10 loops and wait 1 second between each loop
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
