/*========== DATABASE ==========*/

CREATE TABLE IF NOT EXSITS users (
  id                SERIAL PRIMARY KEY,
  username          VARCHAR(20),
  calories          SMALLINT,
  activity_level    SMALLINT,
);
CREATE TABLE IF NOT EXSITS recipeBook (
  id                SERIAL PRIMARY KEY,
  user_id           SERIAL REFERENCES users (id),
  recipe_id         SERIAL REFERENCES recipe (id),
);
CREATE TABLE IF NOT EXSITS recipes (
  id               SERIAL PRIMARY KEY,
  recipe_name      VARCHAR(100),
  servings         SMALLINT,
  prep_time        SMALLINT,
  calories         SMALLINT,
  total_fat        DECIMAL,
  sat_fat          DECIMAL,
  trans_fat        DECIMAL,
  poly_fat         DECIMAL,
  mono_fat         DECIMAL,
  cholesterol      DECIMAL,
  sodium           DECIMAL,
  total_carbs      DECIMAL,
  fiber            DECIMAL,
  sugar            DECIMAL,
  protein          DECIMAL,
  vitamin_d        DECIMAL,
  calcium          DECIMAL,
  iron             DECIMAL,
  potassium        DECIMAL,
);
CREATE TABLE IF NOT EXSITS ingredientList (
  id               SERIAL PRIMARY KEY,
  recipe_id        SERIAL REFERENCES recipe (id),
  ingredient_id    SERIAL REFERENCES ingredients (id),
);
CREATE TABLE IF NOT EXSITS ingredients (
  id               SERIAL PRIMARY KEY,
  ingredient       VARCHAR(100),
  brand            VARCHAR(100),
  prep_time        SMALLINT,
  calories         SMALLINT,
  total_fat        DECIMAL,
  sat_fat          DECIMAL,
  trans_fat        DECIMAL,
  poly_fat         DECIMAL,
  mono_fat         DECIMAL,
  cholesterol      DECIMAL,
  sodium           DECIMAL,
  total_carbs      DECIMAL,
  fiber            DECIMAL,
  sugar            DECIMAL,
  protein          DECIMAL,
  vitamin_d        DECIMAL,
  calcium          DECIMAL,
  iron             DECIMAL,
  potassium        DECIMAL,
);
CREATE TABLE IF NOT EXSITS shoppingTrip (
  id               SERIAL PRIMARY KEY,
  user_id          SERIAL REFERENCES users (id),
  list_id          SERIAL REFERENCES shoppingList (id),
);
CREATE TABLE IF NOT EXSITS shoppingList (
  id               SERIAL PRIMARY KEY,
  user_id          SERIAL REFERENCES users (id),
  recipe_id        SERIAL REFERENCES recipe (id),
);