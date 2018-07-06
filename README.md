# @viewstools/animations

Animations wrapper around [react-spring](https://github.com/drcmda/react-spring)
with an API closer to what Views would use internally.

For React DOM we only expose a `Spring` component as in Views we do timing animations through CSS.
Use it like:

```
import { Spring } from '@viewstools/animations/dom'

<Spring bounciness={10} speed={20} delay={0} to={{paddingTop: props.isActive? 10 : 0 }}>
  {
    styles => (
      //... do something with the styles object  it will have the updated
      // paddingTop value
    )
  }
</Spring>
```

For React Native we expose a `Spring` and `Timing` instead. Spring is the same
interface that DOM has -just import it from `@viewstools/animations/native`.
Use `Timing` like:

```
import { Timing } from '@viewstools/animations/native'

<Timing duration={200} delay={0} to={{paddingTop: props.isActive? 10 : 0 }}>
  {
    styles => (
      //... do something with the styles object  it will have the updated
      // paddingTop value
    )
  }
</Timing>
```

License MIT.
(c) 2018 UXtemple Ltd.
