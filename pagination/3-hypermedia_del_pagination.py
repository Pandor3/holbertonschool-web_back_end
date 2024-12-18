#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: truncated_dataset[i] for i in range(len(truncated_dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        This function will check the index, its indexed data
        calculate the start and end of the requested page
        and return a dictionary with the various requested values
        """
        # Vérifie si l'index et la page_size sont supérieurs à 0
        assert isinstance(index, int) and index >= 0
        assert isinstance(page_size, int) and page_size > 0

        # Va aller chercher la dataset indexée (indexed_data)
        indexed_data = self.indexed_dataset()
        total_data = len(indexed_data)
        assert index < total_data

        # Calcule le début et la fin des index pour les pages demandées
        data = []
        current_index = index
        while len(data) < page_size and current_index < total_data:
            if current_index in indexed_data:
                data.append(indexed_data[current_index])
            current_index += 1

            # Calcule afin de chercher le prochain index
            next_index = current_index if current_index < total_data else None

        return {
            "index": index,
            "data": data,
            "page_size": page_size,
            "next_index": next_index
        }
