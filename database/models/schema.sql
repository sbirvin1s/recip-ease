/*========== DATABASE ==========*/

CREATE TABLE IF NOT EXISTS users (
  id                 SERIAL PRIMARY KEY,
  username           VARCHAR(20),
  calories           SMALLINT,
  activity_level     SMALLINT,
);
CREATE TABLE IF NOT EXISTS recipeBook (
  id                 SERIAL PRIMARY KEY,
  user_id            SERIAL REFERENCES users (id),
  recipe_id          SERIAL REFERENCES recipe (id),
);
CREATE TABLE IF NOT EXISTS recipes (
  id                SERIAL PRIMARY KEY,
  recipe_name       VARCHAR(100),
  servings          SMALLINT,
  prep_time         SMALLINT,
  calories          SMALLINT,
  total_fat         NUMERIC,
  sat_fat           NUMERIC,
  trans_fat         NUMERIC,
  poly_fat          NUMERIC,
  mono_fat          NUMERIC,
  cholesterol       NUMERIC,
  sodium            NUMERIC,
  total_carbs       NUMERIC,
  fiber             NUMERIC,
  sugar             NUMERIC,
  protein           NUMERIC,
  vitamin_d         NUMERIC,
  calcium           NUMERIC,
  iron              NUMERIC,
  potassium         NUMERIC,
);
CREATE TABLE IF NOT EXISTS ingredientList (
  id                SERIAL PRIMARY KEY,
  recipe_id         SERIAL REFERENCES recipe (id),
  ingredient_id     SERIAL REFERENCES ingredients (id),
);
CREATE TABLE IF NOT EXISTS ingredients (
  id                SERIAL PRIMARY KEY,
  ingredient        VARCHAR(100),
  brand             VARCHAR(100),
  prep_time         SMALLINT,
  calories          SMALLINT,
  total_fat         NUMERIC,
  sat_fat           NUMERIC,
  trans_fat         NUMERIC,
  poly_fat          NUMERIC,
  mono_fat          NUMERIC,
  cholesterol       NUMERIC,
  sodium            NUMERIC,
  total_carbs       NUMERIC,
  fiber             NUMERIC,
  sugar             NUMERIC,
  protein           NUMERIC,
  vitamin_d         NUMERIC,
  calcium           NUMERIC,
  iron              NUMERIC,
  potassium         NUMERIC,
);
CREATE TABLE IF NOT EXISTS shoppingTrip (
  id                SERIAL PRIMARY KEY,
  user_id           SERIAL REFERENCES users (id),
  list_id           SERIAL REFERENCES shoppingList (id),
  shopping_date     DATE,
);
CREATE TABLE IF NOT EXISTS shoppingList (
  id                SERIAL PRIMARY KEY,
  user_id           SERIAL REFERENCES users (id),
  recipe_id         SERIAL REFERENCES recipe (id),
);
CREATE TABLE IF NOT EXISTS workouts (
  id                SERIAL PRIMARY KEY,
  user_id           SERIAL REFERENCES users (id),
  workout_type      SERIAL REFERENCES recipe (id),
  workout_date      DATE,
  duration          SMALLINT,
  calories_burned   SMALLINT,
);
CREATE TABLE IF NOT EXISTS journal (
  id                SERIAL PRIMARY KEY,
  user_id           SERIAL REFERENCES users (id),
  journal_date      DATE,
  breakfast_id      SERIAL REFERENCES breakfast (id),
  lunch_id          SERIAL REFERENCES lunch (id),
  dinner_id         SERIAL REFERENCES dinner (id),
  snack_id          SERIAL REFERENCES snack (id),
);

CREATE TABLE IF NOT EXISTS breakfast (
  id                SERIAL PRIMARY KEY,
  recipe_id         SERIAL REFERENCES recipe (id),
  ingredient_id     SERIAL REFERENCES ingredients (id),
);
CREATE TABLE IF NOT EXISTS lunch (
  id                SERIAL PRIMARY KEY,
  recipe_id         SERIAL REFERENCES recipe (id),
  ingredient_id     SERIAL REFERENCES ingredients (id),
);
CREATE TABLE IF NOT EXISTS dinner (
  id                SERIAL PRIMARY KEY,
  recipe_id         SERIAL REFERENCES recipe (id),
  ingredient_id     SERIAL REFERENCES ingredients (id),
);
CREATE TABLE IF NOT EXISTS snack (
  id                SERIAL PRIMARY KEY,
  recipe_id         SERIAL REFERENCES recipe (id),
  ingredient_id     SERIAL REFERENCES ingredients (id),
);