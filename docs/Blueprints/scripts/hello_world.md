---
title: Hello World
---

[See on Github](https://github.com/windmill-labs/windmill/blob/main/starter/scripts/u/bot/hello_world.py)

## Description

The simplest hello world script

## Code

```python
import os

def main(name: str = "Nicolas Bourbaki"):
	print(f"Hello World and a warm welcome especially to {name}")
	print("The env variable at `g/all/pretty_secret`: ", os.environ.get("G_ALL_PRETTY_SECRET"))
	return {"len": len(name), "splitted": name.split() }
```

## Schema

```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
        "name": {
            "default": "Nicolas Bourbaki",
            "description": "",
            "type": "string"
        }
    },
    "required": [],
    "type": "object"
}
```

