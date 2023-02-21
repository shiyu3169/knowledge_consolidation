1. It is sooner than useEffect
2. It is fired synchronously after all DOM mutations (allows you to do sync rerender)
3. You barely need it generally, but can be used to prevent some flickering or delay