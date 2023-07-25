
报错：
ValueError: Timeout value connect was <object object at 0x0000019A00694540>, but it must be an int, float or None.
原因：
其实是selenium版本和urllib3版本不兼容问题。
方法：
更换urllib3版本：
pip uninstall urllib3
pip install urllib3==1.26.2

> [参考博客](https://blog.csdn.net/liu_liu_123/article/details/131146119)
