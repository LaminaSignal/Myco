# 🧠 M1C0 — The Resilient Signal Protocol

**M1C0** (short for *Myco*) is a decentralized, stealth communication protocol inspired by fungal networks. It is designed to support resilient, asynchronous, low-signal communication between humans — especially under oppressive, surveilled, or decaying conditions.

M1C0 does not seek virality. It prioritizes trust, local knowledge, and information integrity over volume or reach.

---

## ✨ Vision

> From isolated spores to a living, growing, resilient network.

M1C0 is not a platform. It’s a protocol — a set of tools for building durable trust webs, passing encrypted knowledge, and forming meaning through quiet repetition and mutual trust. It is designed to *survive platform collapse*.

---

## 🔧 Core Concepts

- **Spores**: Lightweight packets of information (text, metadata, optional attachments)
- **Users**: Identified via token auth; later enriched with trust metadata
- **Trust**: The backbone of propagation — spores move based on trust paths
- **Decay**: Spores weaken and vanish unless re-spored or boosted
- **Vitality**: Composite score for spore relevance, freshness, and network health
- **Lamina Signal**: Stealth layer for ambient communication between trusted nodes
- **Chippy**: Internal system agent and debugger/monitor

---

## ✅ Current Progress

- [x] User CRUD (Create, Read, Update, Delete)
- [x] Database scaffold for spores
- [x] Basic telemetry logging
- [ ] User authentication (JWT bearer) — *in progress*
- [ ] Chippy telemetry batching (flush every 5s)

---

## 📦 Project Structure

m1c0/
├── backend/
│ ├── api/
│ ├── db/
│ ├── models/
│ ├── auth/
│ └── chippy/
├── frontend/
│ └── (Next.js or Vite app setup)
├── protocols/
│ ├── spores/
│ ├── trust/
│ └── lamina/
├── scripts/
└── README.md


---

## 🚧 In Progress

### Core Tasks
- Spore filtering and evaluation system
- Attach spores to users (ownership + visibility)
- Token-based user authentication (JWT)
- Re-sporing: share spores through trust paths
- Vitality score: `trust + interaction - decay`
- Chippy pulse batching (5s flush)

### Frontend
- [ ] Set up base repo (Next.js or Vite)
- [ ] Feed UI
- [ ] Spore creation UI
- [ ] Simple Trust Visualizer

---

## 🚀 Phase 2: Living Myco Network

### Trust + Propagation
- Model 1st / 2nd degree trust
- Local trustlist per user
- Re-sporing with visible trail
- Spore decay unless boosted
- Track and score healthy conversation trees

### Feed Ranking
- Prioritize spores from trusted network
- Allow foreign spores only if trust trail exists
- Score feed items by vitality

### Decentralization
- (Optional) Support federated servers ("roots")
- Federated Chippy telemetry aggregation
- Local-first sync protocol

---

## 🔒 Security Goals

- All spores encrypted at rest
- Optional passwordless login
- Abuse prevention (rate limiting, trust velocity)
- Token refresh support
- Basic bot detection
- `.env` scanning & config validation

---

## 🧪 Testing & DevOps

- [ ] Unit + integration test suites
- [ ] Puppeteer UI tests
- [ ] Dockerized deployment
- [ ] Health dashboard (Grafana)
- [ ] Quiet invite-only launch mode

---

## 🧠 Philosophy

> M1C0 is not a platform.  
> It’s a fungal protocol — one that learns, adapts, and survives.

The future is not viral. It is **mycelial**.

---

## 🗝️ License

TBD — considering AGPL, Blue Oak, or custom hybrid license to preserve protocol freedom and prevent extractive capture.

---

## 🧭 Credits

Built by [@mira] and Chippy, with trust, recursion, and a little bit of spore dust.

