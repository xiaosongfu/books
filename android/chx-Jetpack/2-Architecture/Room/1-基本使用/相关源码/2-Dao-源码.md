## Dao

```
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.CLASS)
public @interface Dao {
}
```

## Insert

```
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.CLASS)
public @interface Insert {
    Class<?> entity() default Object.class;

    @OnConflictStrategy
    int onConflict() default OnConflictStrategy.ABORT;
}
```

## Delete

```
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.CLASS)
public @interface Delete {
    Class<?> entity() default Object.class;
}
```

## Update

```
@Retention(RetentionPolicy.CLASS)
public @interface Update {
    Class<?> entity() default Object.class;

    @OnConflictStrategy
    int onConflict() default OnConflictStrategy.ABORT;
}
```

## Query

```
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.CLASS)
public @interface Query {
    /**
     * The SQLite query to be run.
     * @return The query to be run.
     */
    String value();
}
```

## 

```

```
