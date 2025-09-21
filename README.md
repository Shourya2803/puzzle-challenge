

---
# Project Configuration Details

## 1. Puzzle Loading in Database
- **Location:** Puzzles are stored in the `puzzles` table/collection.  
- **Method:** Admins upload puzzles via the **Admin Dashboard UI** or through a seeding script (`/prisma/seed.ts`).  
- **File Reference:** Database schema defined in `prisma/schema.prisma`.  
- **Notes:** Initial puzzles may require manual seeding using `npx prisma db seed`.






---

### 2. Contest Entries Storage & Increment
- **Schema:** Entries are stored in the `entries` table/collection.  
  - Fields: `id`, `userId`, `puzzleId`, `entryCount`, `createdAt`.  
- **Logic:**  
  - When a user submits an entry, a new row is created (or `entryCount` is incremented if an existing record is found).  
- **File Reference:** Backend logic handled in `src/app/api/entries/route.ts`.

---

### 3. Success/Cancel URLs Configuration
- **Location:** URLs are configured in the **environment variables** file (`.env`).  
  - `STRIPE_SUCCESS_URL=https://my-puzzle-challenge.vercel.app/success`  
  - `
STRIPE_CANCEL_URL=https://my-puzzle-challenge.vercel.app/cancel
`  
- **Usage:** Passed to the Stripe checkout session in `src/lib/stripe.ts`.

---

### 4. Contact Form Wiring
- **Handling:** Messages are sent via **SMTP (Nodemailer)**.  
- **Configuration:** SMTP credentials set in `.env`:  
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`  
- **Fallback:** If SMTP is not configured, messages are logged in server console.  
- **File Reference:** Logic handled in `src/app/api/contact/route.ts`.
