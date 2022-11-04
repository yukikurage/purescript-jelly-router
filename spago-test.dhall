let config = ./spago.dhall

in config //
  { sources = config.sources # [ "test/**/*.purs" ]
  , dependencies = config.dependencies # [ "aff", "foldable-traversable" ]
  , backend = "purs-backend-es build"
  }
