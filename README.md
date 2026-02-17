# spinal-case-converter# Spinal Case Converter

A lightweight JavaScript utility that converts strings into
**spinal-case** (also known as kebab-case).

Spinal case formatting transforms text into lowercase words joined by
hyphens.

Example: - `This Is Spinal Tap` → `this-is-spinal-tap` - `MustNotBeHere`
→ `must-not-be-here` - `The_Andy_Griffith_Show` →
`the-andy-griffith-show`

------------------------------------------------------------------------

## ✨ Features

-   Splits camelCase and PascalCase words correctly
-   Handles spaces
-   Handles underscores
-   Normalizes mixed separators
-   Outputs clean lowercase spinal-case
-   Demonstrates practical usage of **positive lookahead regex**

------------------------------------------------------------------------

## 🧠 How It Works (Conceptual Overview)

The function works in three main stages:

### 1️⃣ Split Before Capital Letters

Uses **positive lookahead** to split a string *before* each uppercase
letter (except the first one).

This allows:

    MustNotBeHere → ["Must", "Not", "Be", "Here"]

### 2️⃣ Normalize Separators

Each segment is cleaned by replacing: - Spaces - Underscores

with hyphens.

### 3️⃣ Flatten & Lowercase

All parts are: - Joined with hyphens\
- Empties removed\
- Converted to lowercase

Final result:

    must-not-be-here

------------------------------------------------------------------------

## 📌 Regex Concept Used

The core concept demonstrated is:

**Positive Lookahead**

It matches a position only if it is followed by a specific pattern ---
without consuming that pattern.

In simple terms: \> "Split here, but keep the capital letter."

------------------------------------------------------------------------

## 📦 Example Inputs & Outputs

  -------------------------------------------------------------------------------------------------------------------------------
  Input                                                        Output
  ------------------------------------------------------------ ------------------------------------------------------------------
  `ProductLandingPeterMuraiGitiriJeshi page`                   `product-landing-peter-murai-gitiri-jeshi-page`

  `This Is Spinal Tap`                                         `this-is-spinal-tap`

  `The_Andy_Griffith_Show`                                     `the-andy-griffith-show`

  `Teletubbies say Eh-oh`                                      `teletubbies-say-eh-oh`

  `AllThe-small Things MustNotBeDebated from InsideThisHall`   `all-the-small-things-must-not-be-debated-from-inside-this-hall`
  -------------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🚀 Usage

1.  Import or include the script in your project.
2.  Call the function with a string.
3.  Receive a spinal-case formatted string.

This utility is suitable for: - URL slug generation - CSS class
normalization - Formatting identifiers - Text transformation pipelines

------------------------------------------------------------------------

## 🛠 Language

-   JavaScript (100%)

------------------------------------------------------------------------

## 📄 License

MIT License

------------------------------------------------------------------------

## 👤 Author

Created as a regex showcase demonstrating how positive lookahead can be
applied in real-world string transformation problems.