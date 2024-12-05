#!/usr/bin/env python3
"""
This module will contain an async function which will
take an int argument and return its randomized values
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    This async function will delay a return at a random time
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
