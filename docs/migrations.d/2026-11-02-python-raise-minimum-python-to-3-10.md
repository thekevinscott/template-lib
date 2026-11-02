# python: raise minimum Python to 3.10

### Summary

The package now requires Python 3.10 or newer. Python 3.9 reached end-of-life
in October 2025, and the `ubuntu-latest` (26.04) CI runners no longer ship it.

### Required changes

Upgrade to Python 3.10 or newer. On 3.9, pip no longer finds a compatible
release and falls back to the last one that allowed 3.9.

### Deprecations removed

None.

### Behavior changes without code changes

None.

### Verification

```
python --version          # 3.10 or newer
pip install mynewproduct
mynewproduct --version
```
