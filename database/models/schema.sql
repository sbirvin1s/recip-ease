/*========== DATABASE ==========*/

\c recipease;
-- Drop Tables
  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS user_meta_data CASCADE;
  DROP TABLE IF EXISTS recipes CASCADE;
  DROP TABLE IF EXISTS ingredients CASCADE;
  DROP TABLE IF EXISTS branded_foods CASCADE;
  DROP TABLE IF EXISTS food CASCADE;
  DROP TABLE IF EXISTS food_nutrient CASCADE;
  DROP TABLE IF EXISTS ingredient_list CASCADE;
  DROP TABLE IF EXISTS recipe_book CASCADE;
  DROP TABLE IF EXISTS shopping_list CASCADE;
  DROP TABLE IF EXISTS shopping_trip CASCADE;
  DROP TABLE IF EXISTS workouts CASCADE;
  DROP TABLE IF EXISTS breakfast CASCADE;
  DROP TABLE IF EXISTS lunch CASCADE;
  DROP TABLE IF EXISTS dinner CASCADE;
  DROP TABLE IF EXISTS snack CASCADE;
  DROP TABLE IF EXISTS journal CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id                       SERIAL PRIMARY KEY,
  uid                      TEXT UNIQUE,
  first_name               TEXT,
  last_name                TEXT,
  age                      TEXT,
  sex                      TEXT,
  height                   TEXT,
  current_weight           TEXT,
  fitness_level            TEXT,
  calorie_goal             TEXT,
  weight_goals             TEXT,
  created_at               TIMESTAMP NOT NULL,
  updated_at               TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_meta_data (
  id                       SERIAL PRIMARY KEY,
  user_id                  SERIAL REFERENCES users (id),
  age                      TEXT,
  height                   TEXT,
  current_weight           TEXT,
  fitness_level            TEXT,
  calorie_goal             TEXT,
  weight_goals             TEXT,
  created_at               TIMESTAMP NOT NULL
);

CREATE OR REPLACE FUNCTION trigger_update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_update_timestamp();

CREATE TABLE IF NOT EXISTS recipes (
  id                       SERIAL PRIMARY KEY,
  recipe_name              TEXT,
  recipe_img               TEXT,
  servings                 SMALLINT,
  prep_time                SMALLINT,
  instructions             TEXT,
  calories                 NUMERIC,
  total_fat                NUMERIC,
  sat_fat                  NUMERIC,
  trans_fat                NUMERIC,
  poly_fat                 NUMERIC,
  mono_fat                 NUMERIC,
  cholesterol              NUMERIC,
  sodium                   NUMERIC,
  total_carbs              NUMERIC,
  fiber                    NUMERIC,
  sugar                    NUMERIC,
  protein                  NUMERIC,
  vitamin_d                NUMERIC,
  calcium                  NUMERIC,
  iron                     NUMERIC,
  potassium                NUMERIC
);
CREATE TABLE IF NOT EXISTS ingredients (
  id                       SERIAL PRIMARY KEY,
  fdc_id                   BIGINT,
  ingredient               TEXT,
  brand                    TEXT,
  food_category            TEXT,
  upc                      TEXT,
  serving_size             NUMERIC,
  serving_unit             TEXT,
  servings_per_container   NUMERIC,
  calories                 NUMERIC,
  total_fat                NUMERIC,
  sat_fat                  NUMERIC,
  trans_fat                NUMERIC,
  poly_fat                 NUMERIC,
  mono_fat                 NUMERIC,
  cholesterol              NUMERIC,
  sodium                   NUMERIC,
  total_carbs              NUMERIC,
  fiber                    NUMERIC,
  sugar                    NUMERIC,
  protein                  NUMERIC,
  vitamin_a                NUMERIC,
  vitamin_c                NUMERIC,
  vitamin_d                NUMERIC,
  calcium                  NUMERIC,
  iron                     NUMERIC,
  potassium                NUMERIC
);
CREATE TABLE IF NOT EXISTS ingredient_list (
  id                       SERIAL PRIMARY KEY,
  recipe_id                SERIAL REFERENCES recipes (id),
  ingredient_id            SERIAL REFERENCES ingredients (id),
  ingredient_amount        NUMERIC,
  ingredient_unit          TEXT
);
CREATE TABLE IF NOT EXISTS recipe_book (
  id                       SERIAL PRIMARY KEY,
  user_id                  SERIAL REFERENCES users (id),
  recipe_id                SERIAL REFERENCES recipes (id)
);
CREATE TABLE IF NOT EXISTS shopping_list (
  id                       SERIAL PRIMARY KEY,
  user_id                  SERIAL REFERENCES users (id),
  recipe_id                SERIAL REFERENCES recipes (id)
);
CREATE TABLE IF NOT EXISTS shopping_trip (
  id                       SERIAL PRIMARY KEY,
  user_id                  SERIAL REFERENCES users (id),
  list_id                  SERIAL REFERENCES shopping_list (id),
  shopping_date            DATE
);
CREATE TABLE IF NOT EXISTS workouts (
  id                       SERIAL PRIMARY KEY,
  user_id                  SERIAL REFERENCES users (id),
  workout_type             TEXT,
  workout_date             DATE,
  duration                 SMALLINT,
  calories_burned          SMALLINT
);
CREATE TABLE IF NOT EXISTS breakfast (
  id                       SERIAL PRIMARY KEY,
  recipe_id                SERIAL REFERENCES recipes (id),
  ingredient_id            SERIAL REFERENCES ingredients (id)
);
CREATE TABLE IF NOT EXISTS lunch (
  id                       SERIAL PRIMARY KEY,
  recipe_id                SERIAL REFERENCES recipes (id),
  ingredient_id            SERIAL REFERENCES ingredients (id)
);
CREATE TABLE IF NOT EXISTS dinner (
  id                       SERIAL PRIMARY KEY,
  recipe_id                SERIAL REFERENCES recipes (id),
  ingredient_id            SERIAL REFERENCES ingredients (id)
);
CREATE TABLE IF NOT EXISTS snack (
  id                       SERIAL PRIMARY KEY,
  recipe_id                SERIAL REFERENCES recipes (id),
  ingredient_id            SERIAL REFERENCES ingredients (id)
);
CREATE TABLE IF NOT EXISTS journal (
  id                       SERIAL PRIMARY KEY,
  user_id                  SERIAL REFERENCES users (id),
  journal_date             DATE,
  breakfast_id             SERIAL REFERENCES breakfast (id),
  lunch_id                 SERIAL REFERENCES lunch (id),
  dinner_id                SERIAL REFERENCES dinner (id),
  snack_id                 SERIAL REFERENCES snack (id)
);

-- Data Loading
  CREATE TABLE IF NOT EXISTS branded_foods (
    -- id                       SERIAL PRIMARY KEY,
    fdc_id                   BIGINT,
    brand_owner              TEXT,
    brand_name               TEXT,
    subbrand_name            TEXT,
    gtin_upc                 TEXT,
    ingredients              TEXT,
    not_a_sig                TEXT,
    serving_size             TEXT,
    serving_unit             TEXT,
    household_serving        TEXT,
    food_category            TEXT,
    data_source              TEXT,
    package                  TEXT,
    modified                 TEXT,
    available                TEXT,
    market_country           TEXT,
    discontiued              TEXT,
    prep                     TEXT,
    trade_channel            TEXT
  );
  CREATE TABLE IF NOT EXISTS food (
    fdc_id                   BIGINT,
    data_type                TEXT,
    description              TEXT,
    food_category_id         TEXT,
    publication_date         TEXT
  );
  CREATE TABLE IF NOT EXISTS food_nutrient (
    id                       BIGINT,
    fdc_id                   BIGINT,
    nutrient_id              TEXT,
    amount                   NUMERIC,
    data_points              TEXT,
    derivation_id            TEXT,
    min                      TEXT,
    max                      TEXT,
    median                   TEXT,
    footnote                 TEXT,
    min_year_acquired        TEXT
  );
  COPY branded_foods
    FROM '/home/sbirvin1s/hackreactor/recip-ease/data/FoodData_Central_branded_food_csv_2022-04-28/branded_food.csv'
    DELIMITER ','
    CSV HEADER
  ;
  COPY food_nutrient
    FROM '/home/sbirvin1s/hackreactor/recip-ease/data/FoodData_Central_branded_food_csv_2022-04-28/food_nutrient.csv'
    DELIMITER ','
    CSV HEADER
  ;
  COPY food
    FROM '/home/sbirvin1s/hackreactor/recip-ease/data/FoodData_Central_branded_food_csv_2022-04-28/food.csv'
    DELIMITER ','
    CSV HEADER
  ;
  UPDATE branded_foods
  SET serving_size =
    CASE
      WHEN COALESCE(serving_size, '') = ''
        THEN 0
      ELSE CAST(serving_size AS NUMERIC)
    END;

  ALTER TABLE branded_foods
  ALTER COLUMN serving_size
  TYPE NUMERIC
  USING serving_size::NUMERIC;

  INSERT INTO ingredients (fdc_id)
  SELECT fdc_id
  FROM branded_foods;

  UPDATE ingredients
  SET ingredient = food.description
  FROM food
  WHERE ingredients.fdc_id = food.fdc_id;
  UPDATE ingredients
  SET brand = branded_foods.brand_owner,
      upc = branded_foods.gtin_upc,
      serving_unit = branded_foods.serving_unit,
      food_category = branded_foods.food_category,
      serving_size = branded_foods.serving_size
  FROM branded_foods
  WHERE ingredients.fdc_id = branded_foods.fdc_id;

  UPDATE ingredients
  SET calories = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '208'
      OR
      food_nutrient.nutrient_id = '1008'
    );

  UPDATE ingredients
  SET total_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '204'
      OR
      food_nutrient.nutrient_id = '1004'
    );

  UPDATE ingredients
  SET sat_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '606'
      OR
      food_nutrient.nutrient_id = '1258'
    );

  UPDATE ingredients
  SET trans_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '605'
      OR
      food_nutrient.nutrient_id = '1257'
    );

  UPDATE ingredients
  SET poly_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '646'
      OR
      food_nutrient.nutrient_id = '1293'
    );

  UPDATE ingredients
  SET mono_fat = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '645'
      OR
      food_nutrient.nutrient_id = '1292'
    );

  UPDATE ingredients
  SET cholesterol = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '601'
      OR
      food_nutrient.nutrient_id = '1253'
    );

  UPDATE ingredients
  SET sodium = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '307'
      OR
      food_nutrient.nutrient_id = '1093'
    );

  UPDATE ingredients
  SET total_carbs = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '205'
      OR
      food_nutrient.nutrient_id = '1005'
    );

  UPDATE ingredients
  SET fiber = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '291'
      OR
      food_nutrient.nutrient_id = '1079'
    );

  UPDATE ingredients
  SET sugar = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '269'
      OR
      food_nutrient.nutrient_id = '2000'
    );

  UPDATE ingredients
  SET protein = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '203'
      OR
      food_nutrient.nutrient_id = '1003'
    );

  UPDATE ingredients
  SET vitamin_a = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '318'
      OR
      food_nutrient.nutrient_id = '1104'
    );

  UPDATE ingredients
  SET vitamin_c = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '401'
      OR
      food_nutrient.nutrient_id = '1162'
    );

  UPDATE ingredients
  SET vitamin_d = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '324'
      OR
      food_nutrient.nutrient_id = '1110'
    );

  UPDATE ingredients
  SET calcium = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '301'
      OR
      food_nutrient.nutrient_id = '1087'
    );

  UPDATE ingredients
  SET iron = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '303'
      OR
      food_nutrient.nutrient_id = '1089'
    );

  UPDATE ingredients
  SET potassium = food_nutrient.amount
  FROM food_nutrient
  WHERE ingredients.fdc_id = food_nutrient.fdc_id
  AND (
      food_nutrient.nutrient_id = '306'
      OR
      food_nutrient.nutrient_id = '1092'
    );

  -- UPDATE ingredients
  -- SET ingredient = LOWER(ingredient);

  DROP TABLE IF EXISTS food CASCADE;
  DROP TABLE IF EXISTS food_nutrient CASCADE;
  DROP TABLE IF EXISTS branded_foods CASCADE;

-- CREATE INDEX IF NOT EXISTS recipe_ingredients ON recipe ()