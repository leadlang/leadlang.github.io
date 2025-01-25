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

== UNIX

```sh
curl -fsSL https://leadlang.github.io/install.sh | sh
```

== FULL LIST (UNIX)

```sh
curl -o /tmp/install.sh https://leadlang.github.io/installadv.sh && sh /tmp/install.sh
```

:::

## Supported OS with Architectures

| OS           | Architecture | Type      | Supported | Notes                                |
| ------------ | :----------- | :-------- | :-------: | :----------------------------------- |
| Windows      | x64          | MSVC      |    ✅     | Windows 10 or above                  |
|              |              | win7 MSVC |    🟨     | Windows 7 and 8.1                    |
|              | arm64        | MSVC      |    ✅     | Windows 10 or above                  |
|              | i686         | MSVC      |    ✅     | Windows 10 32 Bit                    |
|              |              | win7 MSVC |    🟨     | Windows 7 and 8.1                    |
| macOS        | x64          |           |    ✅     |                                      |
|              | arm64        |           |    ✅     |                                      |
| Linux⭐      | x64          | GNU       |    ✅     | Ubuntu 22.04 or above and equivalent |
|              |              | 20.04 GNU |    🟨     | Use the full list installer. 20.04+  |
|              |              | MUSL      |    🟨     | Use the full list installer          |
|              | x86          | GNU       |    🟨     |                                      |
|              |              | MUSL      |    🟨     | Use the full list installer          |
|              | arm64        | GNU       |    ✅     | Ubuntu 22.04 or above and equivalent |
|              |              | MUSL      |    🟨     | Use the full list installer          |
|              | armv7        | GNU       |    🟨     |                                      |
|              |              | MUSL      |    🟨     | Use the full list installer          |
|              | mips         | GNU       |    🟨     | Use the full list installer          |
|              | mipsel       | GNU       |    🟨     | Use the full list installer          |
|              | mips64       | GNU       |    🟨     | Use the full list installer          |
|              | mips64el     | GNU       |    🟨     | Use the full list installer          |
|              | powerpc      | GNU       |    🟨     | Use the full list installer          |
|              | powerpc64    | GNU       |    🟨     | Use the full list installer          |
|              | powerpc64le  | GNU       |    🟨     | Use the full list installer          |
|              | loongarch64  | GNU       |    🟨     | Use the full list installer          |
|              |              | MUSL      |    🟨     | Use the full list installer          |
| FreeBSD      | x64          |           |    🟨     |                                      |
|              | i686         |           |    🟨     |                                      |
|              | arm64        |           |    🟨     |                                      |
|              | armv7        |           |    🛠️     |                                      |
| Illumos      | x64          |           |    🟨     |                                      |
| DragonFlyBSD | x64          |           |    🟨     |                                      |
| NetBSD       | x64          |           |    🟨     |                                      |
|              | i686         | 32-bit    |    🛠️     |                                      |
|              | arm64        |           |    🛠️     |                                      |
|              | armv7        | 32-bit    |    🛠️     |                                      |
| TempleOS     | x86          |           |    ❌     |                                      |

✅: Fully Supported

🟨: Lead Docs GUI Unavailable

❌: Not Supported

🛠️: Can be built from source

⭐: See Below

::: details **Note for linux users**
You must have the following installed for **lead docs** desktop application

| Package       | Version       |
| ------------- | ------------- |
| webkitgtk-4.1 | 2.20 or above |

You might follow [this](https://tauri.app/start/prerequisites/#linux)

You can however use the **CLI** lead docs without setting these up
:::
