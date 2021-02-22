from smart_lock import __version__
from setuptools import setup, find_packages 

setup(
    name='smart_lock',
    description='A REST API used for controlling a smart lock sensor network.',
    version=__version__,
    author="Brandon Reno | Chris Webster",
    packages=find_packages(),
    entry_points={
        'console_scripts': [
            'smart_lock = smart_lock.smart_lock:main'
        ]
    }
)