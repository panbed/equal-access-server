# UDOIT Equal Access Accessibility Checker

**Note:** This repository is **not a fork** of IBM's Equal Access repository. Instead, it incorporates the Equal Access engine as a Git subtree. In the repository root, you will find two main directories:
- **`server/`** – Contains the Node.js server that powers the accessibility scanning service.
- **`ace-engine/`** – Contains the integrated Equal Access engine (originally the `accessibility-checker-engine` from IBM's repo), added via Git subtree.

The subtree was added using the following commands:

```bash
# First, add IBM's Equal Access repository as an upstream remote
git remote add -f upstream git@github.com:IBMa/equal-access.git

# Then, add the accessibility engine as a subtree under the 'ace-engine' directory
git subtree add --prefix=ace-engine upstream master --squash
```

The integrated engine in the `ace-engine` directory has been optimized and slightly modified to meet UDOIT’s requirements. It is designed to run as a server inside a Docker container and can be deployed as a Node.js microservice. Its primary responsibility is to expose an endpoint that scans web pages and returns a report of accessibility rule compliance.

---

## Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Docker Deployment](#docker-deployment)
- [Updating from Upstream](#updating-from-upstream)

---

## Overview

- **Integrated From:** IBM's Equal Access repository.
- **Purpose:** Optimize and integrate the Equal Access engine for deployment as a Dockerized Node.js microservice in the UDOIT accessibility checking system.
- **Use Case:** UDOIT is transitioning from PHP Ally to a more robust solution. This service provides an HTTP endpoint to scan web pages for accessibility, fitting seamlessly into UDOIT’s ecosystem.

---

## Repository Structure

- **`server/`**  
  Contains the Node.js server responsible for running the accessibility scanning service.

- **`ace-engine/`**  
  Contains the Equal Access engine, integrated as a Git subtree from IBM's repository. This is not a fork; it is a subtree inclusion of the `accessibility-checker-engine` directory from the upstream repository.

---

## Docker Deployment

The server is containerized for ease of deployment as a microservice. It runs in a Node.js runtime and listens on a specified port to serve accessibility scanning requests.

### Building the Docker Image

Run this command in the repository root:

```bash
docker build -t udoit-equal-access .
```

### Running the Container

To start the container:

```bash
docker run -d -p 3000:3000 udoit-equal-access
```

---

## Updating from Upstream

This repository tracks changes from the original IBM Equal Access repository. The upstream remote points to the original repository's master branch.

### Steps to Update:

1. **Ensure the Upstream Remote is Set**

   If you haven’t already added IBM's original Equal Access repository as the upstream remote, run:

   ```bash
   git remote add -f upstream git@github.com:IBMa/equal-access.git
   git fetch upstream
   ```

2. **Pull Updates into the Subtree**

   Use the Git subtree pull command to incorporate changes from the upstream master branch into the `ace-engine` subtree:

   ```bash
   git subtree pull --prefix=ace-engine upstream master --squash
   ```

3. **Review and Merge Changes**

   After pulling in the updates, review the changes, resolve any conflicts if necessary, and commit the updates.

---

## How It Was Created

This repository was set up by integrating IBM's Equal Access engine as a Git subtree rather than forking the entire repository. The key steps involved were:

1. **Adding the Upstream Remote**

   ```bash
   git remote add -f upstream
   ```

2. **Adding the Subtree**

   ```bash
   git subtree add --prefix=ace-engine upstream master --squash
   ```

```

