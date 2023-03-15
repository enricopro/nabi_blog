---
title: "Cubit from first Principles"
date: 2023-03-14
draft: false
---

# Cubit from first Principles

![cubit blueprint](https://miro.medium.com/v2/resize:fit:828/format:webp/1*DggO67fLYW-iRgQ6aTaIWA.jpeg)

Our intent was clear early on: to create the best computers for the Self-Sovereign Individual. What this meant, however, was not well defined. [The Advent of Self-Sovereign-Computing](https://blog.nabi.technology/articles/the-advent-of-self-sovereign-computing/) requires rethinking the paradigm of computation, because it was the fallacies of the current mindset that gave rise to the problems we know: data mining, surveillance economy, financial repression, to name just a few.

We approached the problem rigorously, avoiding stumbling over our preconceptions and trying to the best of our ability to build understanding from first principles. We have not yet reached the end of this research; this is what we have understood so far.

## Autonomy to compute

The heart of the matter is autonomy. A computer is a bicycle for the mind that empowers the individual and helps him achieve freedom only when used autonomously.

In the current landscape, autonomy has been sacrificed on the altar of convenience, which potentially turns computers into tools for control, surveillance and repression.

![observe](https://lh3.googleusercontent.com/Ts9MvRS6bofoDxEADR9ZQJpdHA66rsXC5KbK0FaLsmz2iJwFHrYZliivdHZt7BGCI91j-R4M6JD7nX0NoFYpoFtnhYt2T2GuOMw7bx-JPnhhWNVQofnaCyEwrqizdJZbsuU9lsM79agiKc2UoBb9htY)

At present, despite the astounding computing power they have achieved, computers are mostly used as network devices that delegate most operations to servers. This practice shifts the locus of control, from the hands of the individual to the companies operating such servers, which occupy the position of feudal lords in the hierarchy that has come to be created on the web.

> In the internet we want to help create, such static hierarchies must be  replaced by fluid voluntary interactions between peers.

It's not possible however to overcome the client-server paradigm by eliminating servers. Such a resolution is simply not acceptable in the world of today, nor is it desirable given the important role servers play behind the scenes.

The only solution is to democratize access to such servers, making them on a human scale: in two words, personal servers.
If any network device such as a smartphone is required to enter cyberspace, it is with a personal server that a stable residence is achieved. A personal server as a stable home, office, and as a base for the economic activities of the self-sovereign individual in cyberspace.
Believing firmly in all of the above, here is where our vision became clearer: to create the best personal servers in the world.

## Personal Server

A personal server must be powerful and fast, but above all it must be reliable. At all hours of the day and night it must be able to meet the requests without ever stumbling. It must be able to guard the data entrusted to it maintaining maximum integrity.

This extreme reliability in practice is translated into three important aspects:

- Data integrity

- Power stability

- Software reliability

## Data integrity

Those familiar with computers know that they are delicate devices, especially when it comes to data integrity. Drives are constantly bombarded by radiation and electromagnetic fields, and occasionally a bit will flip. This phenomenon is called bit-rot and is just one of the unpleasant occurrences that WILL happen in the life of every disk. Defending against bit-rot and other types of data corruption requires special hardware and software technologies not normally found in personal computers.

> Our goal is to take these technologies used in professional servers and make them accessible to the individual.

The state of the art in digital data integrity involves the filesystem directly managing the disks - which is not the case in traditional operating systems. What professional servers do, is in fact to use special filesystems such as ZFS or BTRFS designed to maintain the highest data integrity possible, at the cost of increased CPU overhead.
In order to work effectively, these filesystems require multiple disks so that the original data can be restored if a copy becomes corrupted. But to realize their full potential, another feature uncommon in average computers is needed: the Error Correction Code (ECC) RAM. If, in fact, data corruption were to occur at the RAM level, this will fool the filesystem and could, in some cases lead to data being overwritten to disk. The way to control this case is to use a RAM that has built-in control layers, as in the case with ECC RAM.

In summary, three features are required to ensure an extreme level of data integrity for a personal server:

- ZFS or BTRFS as filesystems.

- several disks, possibly in a RAID configuration.

- ECC RAM.

---

Recall here that it is unwise to have one's data only on one machine, as this constitutes a single point of failure. Offsite backups are always necessary for a robust data system. We have not considered backups because our analysis focuses only on the requirements of a single personal server, not the requirements of a data system as a whole. Learn more here https://www.raidisnotabackup.com/

----

## Power stability

The precautions described in the previous section can be nullified by a common occurrence: power outage.
In fact, if a power failure occurred while a file was being written, this could not only corrupt that file, but could also prevent the machine from booting up or even worse lead to the ultimate loss of data.

To prevent this scenario as well, it is necessary for the personal server to be equipped with an UPS (Uninterruptible power supply). Quoting from [Wikipedia](https://en.wikipedia.org/wiki/Uninterruptible_power_supply):

> “A UPS differs from an auxiliary or [emergency power system](https://en.wikipedia.org/wiki/Emergency_power_system) or [standby generator](https://en.wikipedia.org/wiki/Standby_generator) in that it will provide near-instantaneous protection from input power interruptions, by supplying energy stored in batteries, [supercapacitors](https://en.wikipedia.org/wiki/Supercapacitor), or [flywheels](https://en.wikipedia.org/wiki/Flywheel). The on-battery run-time of most uninterruptible power sources is relatively short (only a few minutes) but sufficient to start a standby power source or properly shut down the protected equipment.”

The presence of a UPS not only ensures better up-time but more importantly prevents a dangerous situation for the integrity of data.

## Software reliability

---

In this context by “reliable” we mean "suitable or fit to be relied on" -- putting emphasis on the person who relies on something. Generally, one cannot totally rely on something that one does not know how to operate.

---

Software is the interface between the human being and the machine. As such, it must simultaneously meet two requirements that are often in opposition:

- security and stability

- ease of use

Unlike with hardware where it is possible to determine which solution is objectively best for the given circumstance, this is generally not possible with software. In fact, the subjectivity of the individual using the machine is often a more determining criterion than any objective technical difference.
This is the reason why we decided to differentiate our offering into two software solutions:

- A graphical and intuitive OS that emphasizes ease of use. The target user is the one who wants a curated experience, or the novice user. The tradeoffs to be accepted are lower performance and less control and customization.

- An operating system for experienced users who want the highest level of control and customization on their machine. The graphical experience is almost completely replaced by the command line.

We believe this is the best solution to allow different types of users to use Cubit to the fullest and in the way they prefer or feel most comfortable. These two options will be the OSs recommended and officially supported by Cubit. The use of any other software will not be hindered or disfavored in any way, since we believe in the concept of "your machine, your rules."

## TLDR;

We have seen that autonomy to compute is a prerequisite for the rise of the Self-Sovereign Individual. More [Here](https://medium.com/@pippellia/the-advent-of-self-sovereign-computing-a797b463b55e).

Maximum autonomy to compute is achieved with the use of one's own personal server. If any network device such as a smartphone is a gateway to cyberspace, it is with a personal server that a stable residence in cyberspace is achieved.

The most important technical feature of a personal server is reliability. This translates into 3 aspects:

- Data Integrity

- Power stability

- Software reliability

To best meet these three aspects Cubit:

- will integrate ZFS or BTRFS as filesystems, 2 disks and ECC RAM to ensure maximum data integrity.

- will be equipped with a UPS, to nullify damage due to power outage and ensure high up-time.

- offer two different software solutions to satisfy different types of users.
