# AI-Assisted Development Prompt Log

## AI Tool Used

I used ChatGPT as my primary AI-assisted development tool for this assignment.

I did not use Cursor or Claude Code because I did not have access to their premium plans during the task. Instead, I used ChatGPT throughout the implementation as a pair-programming and review tool for:

- breaking down the reference UI
- converting reference styles into Tailwind
- planning components
- implementing interactions
- debugging visual mismatches
- reviewing architecture decisions
- accessibility and keyboard behaviour

I wrote and modified the final code myself and continuously compared the implementation against the provided reference.

---

# 1. Initial Implementation Planning

### Prompt

> I need to build a pixel-perfect clone of this Airbnb listing page in Next.js with TypeScript and Tailwind. Help me break the page into sensible components without over-engineering it. I want the structure to remain simple enough that I can understand and explain everything in an interview.

### Why I used AI

I wanted to first understand how to divide the page before starting implementation.

### Result

I separated the UI into sections such as:

- Navbar
- Hero gallery
- Property overview
- Booking card
- Amenities
- Calendar
- Reviews
- Location
- Host information
- Photo Tour
- Lightbox

---

# 2. Matching the Reference Layout

### Prompt

> I am reproducing this reference page exactly. I will give you the reference CSS/layout and my current component. Convert only the relevant values to Tailwind and explain what is causing the visual difference. Do not redesign it.

### Why I used AI

Instead of asking AI to generate the page from scratch, I used it to help translate specific measurements from the reference into my implementation.

### Result

This helped me match:

- widths
- gaps
- padding
- font sizes
- border radius
- shadows
- image aspect ratios
- hover and active states

---

# 3. Hero Image Grid

### Prompt

> My hero image section still does not match the reference. The first image should occupy the full left side and the remaining four images should form a 2x2 layout on the right. Help me reproduce the exact grid proportions and image behaviour using Tailwind.

### Result

I implemented the hero using CSS Grid with a fixed aspect ratio and independent hover overlays.

---

# 4. Sticky Booking Card

### Prompt

> The booking card on the right should stay visible while scrolling through the main property content, but it should stop when its parent section ends. Should I use fixed or sticky positioning, and how should I structure the parent layout?

### Result

I used `position: sticky` rather than `fixed`, so the booking card remains constrained by its parent container.

---

# 5. Photo Tour Routing

### Prompt

> The reference opens the Photo Tour using `?view=photos`. I know Next.js App Router routes, but I am not familiar with this query-parameter approach. Explain how I can keep the same page route and render the Photo Tour when `view=photos` is present.

### Result

I learned to use Next.js `searchParams` for UI state represented in the URL.

The application now supports:

```text
/                           Listing
/?view=photos               Photo Tour
/?view=photos&photo=2       Lightbox
```
