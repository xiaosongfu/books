## Entity

```
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.CLASS)
public @interface Entity {
    String tableName() default "";

    Index[] indices() default {};

    boolean inheritSuperIndices() default false;

    String[] primaryKeys() default {};

    ForeignKey[] foreignKeys() default {};

    String[] ignoredColumns() default {};
}
```

## PrimaryKey

```
@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.CLASS)
public @interface PrimaryKey {
    boolean autoGenerate() default false;
}
```

## ColumnInfo

```
@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.CLASS)
public @interface ColumnInfo {
    String name() default INHERIT_FIELD_NAME;

    @SuppressWarnings("unused")
    @SQLiteTypeAffinity 
    int typeAffinity() default UNDEFINED;

    boolean index() default false;

    @Collate 
    int collate() default UNSPECIFIED;

    String defaultValue() default VALUE_UNSPECIFIED;
}
```

还有其他一些方法，没有摘录到这里。

## Ignore

```
@Target({ElementType.METHOD, ElementType.FIELD, ElementType.CONSTRUCTOR})
@Retention(RetentionPolicy.CLASS)
public @interface Ignore {
}
```

## 

```

```
