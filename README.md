# rebels-starter-rn
StarterKit and generator project RN
# How to use?
run this command, for making project with starterkit

```$ npx rebels-starter-rn```

- set name your project (ex: StarterAppRn)
- set bundle identifier (ex: com.starterapprn)
- choices your template (ex: react-native(typescript))


# Generator
generator options, on root project

options args

```$ npx rebels-starter-rn (-generate | -g | generate)```

| Generator    | path dir        | args              |
|--------------|-----------------|-------------------|
| Screens      | src/screens     | screens (-s)      |
| Components   | src/components  | components (-c)   |
| Redux        | src/store       | redux (-r)        |


run this generator on root project
### generate screens
```$ npx rebels-starter-rn -g (screens | -s) NameOfScreens```

### generate components
```$ npx rebels-starter-rn -g (components | -c) NameOfComponents```


### generate redux
```$ npx rebels-starter-rn -g (redux | -r) NameOfRedux```