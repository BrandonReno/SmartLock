# smart_lock

A REST API using the FAST API framework to control a smart lock sensor network.

## Getting Started

To create a new virtual environment:
```
python -m venv yourVirtualEnvName
```

To activate your virtual environment in windows powershell:
```
yourVirtualEnvName\Scripts\activate.ps1
```

To activate in OSX / Unix:
```
source yourVirtualEnvName/bin/activate
```


Once the virtual environment is created, then install the requirements and gameboardAPI package itself.
```
pip install -r requirements.txt
pip install -e .
```

Once this is done you are set to use smart_lock!

## Usage

To start smart_lock, enter the command `smart_lock` and FastAPI will start using a uvicorn server! This can be viewed at http://127.0.0.1:8000/docs