---
title: "The Clash of Nodes in 2023"
thumbnail: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*GlU-nE8LpQGMaPvtLH5J3g.png"
date: 2023-03-13
draft: false
slug: "the-clash-of-nodes-in-2023"
---

# The Clash of Nodes in 2023 | Hardware Comparison

*If you are looking for a guide to buying a plug & play device to host your Bitcoin or Lightning node, or more generally for your personal server, then you have come to the right place. In this guide, we will analyze the 5 most popular devices on the market, comparing them in 9 categories to help you make the most informed choice.*

---

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*GlU-nE8LpQGMaPvtLH5J3g.png)The Raspberry Pi 4 has long been the most popular option for hosting a node in the Bitcoin community. This is a testament to the lightness and optimisation of the Bitcoin software, a key feature for a truly decentralized and geographically distributed network. We love the Raspberry Pis, but they are simply not designed to run a Bitcoin node 24/7, let alone as a personal server, because they are not reliable. But don't despair, as we'll see in this article, there are many other options that are much more stable and powerful from which you can choose.

## The Best Personal Server & Bitcoin Node.

In this blog post, we will compare the 5 most popular bitcoin-oriented plug-and-play* personal servers currently available on the market to decide the winner.

Let's start by listing the five competitors:

- Embassy One** | 8GB of RAM

- Model 2 | 8GB of RAM

- Tanto | 4GB of RAM

- Embassy Pro | 32 GB of RAM

- Cubit | 32 GB of ECC RAM

We will compare the 5 devices in the following 9 categories to see how they perform and which node is the best in its price range.

1. Dimensions

2. CPU Power

3. RAM

4. Storage

5. Virtualizations (for Pro)

6. Connectivity

7. System Stability

8. Power Consumption

9. Price

This comparison will not take into account the different software the machines are equipped with, but only the hardware, for two reasons:  

- Any software can be installed on each of these personal servers, including that of the competitors.
- As seen in [Cubit from First Principles](https://blog.nabi.technology/articles/cubit-from-first-principles/), when it comes to software the subjectivity of the individual using the machine is often a more determining criterion than any objective technical difference.

Let’s get started with the number 1.

---

*We will not consider DIY builds because those are fundamentally another category and require some technical skills that not everyone has.

** Among the many RP4-based Bitcoin nodes, we chose Embassy One since it is among the cheapest and most reliable.

---

## 1. Dimensions

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*82p4mO5RPYbU6b-0HfktgQ.jpeg)

*Visual representation of the relative dimensions.*

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*184w2KHPZ3qwyfBTTMEzMA.png)

Without any major surprises, we see that the most compact solution is based on the Raspberry Pi 4. However, if you want to include the SSD in the RP4 chassis (which is the case with the Embassy One), the footprint increases and the 5 products are all comparable in terms of base dimensions.

Cubit has a much greater height due to the capacity to hold two SSD disks and a mini UPS as we will see later.

## 2. CPU Power

It is not possible to directly compare an ARM architecture with an x86 architecture; only [estimates are possible](https://superuser.com/questions/1579497/how-does-a-raspberry-pi-4-truly-compare-against-a-modern-desktop-cpu). Comparing the other three is instead very straightforward.

![](/home/filippo/.var/app/com.github.marktext.marktext/config/marktext/images/2023-03-07-15-39-57-image.png)

Although these benchmarks are not perfect, they give a good approximation of the performance that can be expected in practice.

As you can see from the graph, the range of performance is really substantial, from the Embassy One to the Cubit, which is about 14 times more powerful.

Source: [Cpu benchmark](https://miro.medium.com/v2/resize:fit:720/format:webp/1*bikmZ1PsRijtLkD6hdEOUw.png)

## 3. RAM

All 5 devices have DDR4 memory, but as can be seen from the graph below, the amount of RAM varies substantially.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*Vr_BodvZKYQHNi3Hgk4Xqg.png)

In the low-range we find the Model 2 and the Embassy One equipped with 8GB of RAM, whereas the Tanto has only 4 GB of RAM.

For the high end, both the Embassy Pro and Cubit are equipped with 32GB of RAM, but only Cubit offers Error Correction Code (ECC) compatibility, a crucial feature for maintaining high system stability and preventing data corruption over long periods of time (ever heard about [bit rot](https://en.wikipedia.org/wiki/Data_degradation)?).  

Learn more on [ECC RAM](https://en.wikipedia.org/wiki/ECC_memory) and what [Linus Torvalds thinks about it.](https://www.realworldtech.com/forum/?threadid=198497&curpostid=198647)

## 4. Storage

Regarding storage, there are two important parameters to consider, namely capacity and speed.

#### Storage Capacity

Below is the graph showing the maximum amount of storage with which the 5 different devices are provided. Cubit is the only one that can mount two SSDs, possibly in RAID configuration.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*vTWG9AmVOFj5fIlVLC4qTg.png)

#### Speed

The RP4 fails to take full advantage of the speed of the SATA SSD disk and leaves much performance unused (this explains the difference with the Model 2, which is equipped with a comparable disk).

The Tanto, the Embassy Pro and Cubit can use NVMe disks that are much more performing, although the RockPro64 (Tanto’s board) cannot take advantage of these disks at 100 percent.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*9GZH43Ghf6xMeuKWL8_aSw.png)

Sources:

- [Raspberry Pi 4 speed](https://www.tomshardware.com/news/raspberry-pi-4-ssd-test,39811.html)

---

*Note: Of the two disposable disk ports on Cubit, only one is m2, while the other is SATA III (much slower). If you choose to use Cubit with a SATA RAID of drives, the speed will be limited by the SATA interface to 550/500 MB/s read/write on both disks.*

---

## 5. Virtualizations (for Pro)

You may be interested in this section if you plan to use the device as a Virtual Machine Host instead of using one OS to do all the operations.  
If this is not the case, you can skip this section.

The Model 2, Embassy Pro and Cubit offer both VT-x and VT-d (or the AMD equivalents).

For an in-depth reading about the virtualization capabilities of the different boards we refer to the following data sheets.

- Embassy One [Raspberry Pi 4](https://datasheets.raspberrypi.com/rpi4/raspberry-pi-4-product-brief.pdf)

- Tanto [ROCKPro64 - PINE64](https://wiki.pine64.org/wiki/ROCKPro64)

- Model 2 [Intel® Celeron® Processor J4125](https://www.intel.com/content/www/us/en/products/sku/197305/intel-celeron-processor-j4125-4m-cache-up-to-2-70-ghz/specifications.html)

- Embassy Pro [Intel Core i710510U](https://ark.intel.com/content/www/us/en/ark/products/196449/intel-core-i710510u-processor-8m-cache-up-to-4-90-ghz.html)

- Cubit [Ryzen Embedded v2516](https://en.wikichip.org/wiki/amd/ryzen_embedded/v2516)

## 6. Connectivity

Nodes and personal servers continue to exchange data with the Internet and the home network. The faster this connection is, the better.  

The Tanto, Model 2 and especially the Embassy Pro cannot take advantage of the speed of their respective disks because the data transfer rate is limited by the antiquated 1Gb Ethernet port. Cubit differs from the others by having two Ethernet ports, one of which is 2.5Gb.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*lMlCPQV-5HS9DCagHabcBA.png)

*We performed the Gb/s to MB/s conversion to make this graph easily comparable with the one in which we compared disk speeds.*

## 7. System Stability

As we explored in detail in [Cubit from First Principles](https://blog.nabi.technology/articles/cubit-from-first-principles/), we at Nabi consider this category to be the most important for a personal server, since these types of devices differ (or should differ) from ordinary PCs precisely in the aspect of stability and reliability.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*vB3ST1i4K6MJCbgVJ_eeNg.png)

RP4 is notoriously unstable when it comes to power supply, power delivery and data integrity which for many users has resulted in data corruption and data loss. The Embassy One manages to limit these issues to some extent thanks to the NasPi case, although connecting the SSD via the USB port arguably remains its greatest weakness.  

The situation improves with the Tanto, as the SSD drive is connected through a PCie adapter, although overall this product remains more unstable than the other 3 devices because of its limited architecture.

The Model 2 and Embassy Pro are basically equivalent in that:

- they have no power protection.

- they have only one disk, resulting in no data redundancy.

- they do not support ECC RAM.

Cubit is by far the most stable and reliable thanks to the:

- Internal UPS for protecting from power surges and blackouts.

- Ability to configure RAID1 level of redundancy (mirroring)

- ECC RAM to preserve data integrity and correct errors.

- Fanless and ventless design for maximum protection from dust and dirt.

## 8. Power Consumption

Considering the same set of disks, the power consumption of the different boards has the most impact on the overall power consumption of the devices.

Power consumption varies depending on the activity being performed, the workload, and the architecture of the board and the software used. To compare such different architectures, we use the maximum TDP as a proxy for power consumption*.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*iEwQPur7M9zAOKZ_z_HItQ.png)

**given we are not interested in obtaining a realistic estimate but only want to compare these devices against each other in this category.*

## 9. Price

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*kZoCGMC-5p5oOFLShViZyw.png)

The prices of the various devices make it clear that we are comparing two different ranges, i.e., low end as far as the Embassy One, Tanto and Model 2 are concerned, while the Embassy Pro and Cubit fall in the high end of personal servers.

# Conclusions

We have come to the last act of this guide, the showdown to declare the winner in the respective price categories.

#### Low Range

![](https://miro.medium.com/v2/resize:fit:606/format:webp/1*KoFmi6tLeV_L_P3Ex4AQGA.png)

Because of the same price, it is pretty straightforward to decree that the Model 2 surpass the RoninDojo's Tanto, when it comes to performance and reliability. What tips the scales toward MyNode's product is the double availability of RAM and higher CPU power (~2.2x).

As for the comparison with Embassy One, we believe that MyNode's machine nevertheless comes out on top, since for a difference of $130 or +27.7% the Model 2 offers a convincingly superior product.  

Specifically,compared to the Embassy, the Model 2 offers:

- 3.3x CPU performance

- 3.2x Disk performance.

- Much better stability and reliability overall.

The comparison between the Embassy and the Tanto is not so clear because of the price difference. We decided to place the Tanto in second place since our hearts ache to connect a disk via an USB port. 💔

#### High Range

![](https://miro.medium.com/v2/resize:fit:598/format:webp/1*RsTydvXvnzbfDRbhuBviiw.png)

The choice here is very straightforward. For a difference of only $200 or +11%, Cubit is more powerful, more flexible, and most importantly, more reliable than the Embassy Pro.

To recap, Cubit has:

- ~2x CPU performance.

- Up to 2 SSDs (RAID1 configuration).

- 2.5x faster Ethernet.

- Internal UPS.

- Fanless Design.

---

We at Nabi aspire to *excellence* in designing our products for the self-sovereign individual. We believe Cubit lives up to our mission, and reflects what a personal server should be.

---


