---
layout: doc
sidebar: true
---

# Get Lead Lang

Lead lang is distributed using **leadman**. The following command can install leadman on **Windows** and **most UNIX-like** systems. [Read more about supported operating systems](#supported-os-with-architectures)

## Install

:::tabs
== Windows (Powershell)

```sh
irm https://leadlang.github.io/install.ps1 | iex
```

== Linux / macOS / BSD

```sh
curl -fsSL https://leadlang.github.io/install.sh | sh
```

:::

## Supported OS with Architectures

| OS           | Architecture   | Supported | Notes                                |
| ------------ | :------------- | :-------: | :----------------------------------- |
| Windows      | x64            |    ✅     | Windows 10 or above                  |
|              | arm64          |    ✅     | Windows 11                           |
|              | i686 (32-bit)  |    ✅     | Windows 10 32 Bit                    |
| macOS        | x64            |    ✅     |                                      |
|              | arm64          |    ✅     |                                      |
| Linux⭐      | x64            |    ✅     | Ubuntu 20.04 or above and equivalent |
|              | i686 (32-bit)  |    🟨     |                                      |
|              | arm64          |    🟨     |                                      |
|              | armv7 (32-bit) |    🟨     |                                      |
| FreeBSD      | x64            |    🟨     |                                      |
|              | i686 (32-bit)  |    🟨     |                                      |
|              | arm64          |    🟨     |                                      |
|              | armv7 (32-bit) |    🛠️     |                                      |
| Illumos      | x64            |    🛠️     |                                      |
| DragonFlyBSD | x64            |    🛠️     |                                      |
| NetBSD       | x64            |    🟨     |                                      |
|              | i686 (32-bit)  |    🛠️     |                                      |
|              | arm64          |    🛠️     |                                      |
|              | armv7 (32-bit) |    🛠️     |                                      |
| Solaris      | x64            |    🛠️     |                                      |
|              | sparc V9       |    🛠️     |                                      |
| TempleOS     | x86            |    ❌     |

✅: Fully Supported

🟨: Lead Docs GUI Unavailable

❌: Not Supported

🛠️: Can be built from source

⭐: See Below

::: details **Note for x86_64 linux users**
You must have the following installed for **lead docs** desktop application

| Package       | Version      |
| ------------- | ------------ |
| webkitgtk-4.1 | 2.20 to 2.36 |

You might follow [this](https://tauri.app/start/prerequisites/#linux)

You can however use the **CLI** lead docs without setting these up
:::
