## TheLounge Ansible Playbook  

Ansible playbook to deploy "The Lounge".

----

### Installing with embedded Ansible

If this is being executed on a system that already has Ansible installed but is
incompatible with these playbooks the script `bootstrap-ansible.sh` can be
sourced to grab an embedded version of Ansible prior to executing the service.

``` bash
source bootstrap-ansible.sh
```

##### Manually resolving the dependencies

This playbook has external role dependencies. If Ansible is not installed with
the `bootstrap-ansible.sh` script these dependencies can be resolved with the
``ansible-galaxy`` command and the ``ansible-role-requirements.yml`` file.

* Example galaxy execution

``` bash
ansible-galaxy install -r ansible-role-requirements.yml
```

#### Running the playbook

Once the dependencies have been resolved run the playbook.

* Example playbook execution

``` bash
ansible-playbook -i inventory.ini installTheLounge.yml
```

* Inventory should be modified to meet the needs of the deployment. The local
inventory will deploy directly on `localhost` by default.

* This playbook can deploy an example configuration file with sensible defaults.
To enable the provided example config set the variable
`thelounge_example_config` to `true` like so.

``` bash
ansible-playbook -i inventory.ini installTheLounge.yml -e thelounge_example_config=yes
```

By default the playbook will only install `thelounge`. If you need to re-install
`thelounge` on a subsequent playbook run, set the package state option to
"latest".

``` bash
ansible-playbook -i inventory.ini installTheLounge.yml -e thelounge_package_state=latest
```

#### Post deployment

Once `TheLounge` has been deployed the system will have a new user named
**thelounge**. To modify users or run server configuration commands, switch to
**thelounge** user and run the `thelounge` commands normally.

* See the
[server configuration](https://thelounge.chat/docs/server/configuration.html)
documentation for more details on what can be setup.

* See the [user](https://thelounge.chat/docs/server/users.html) documentation for
more details on managing local users.

##### Customizing the experience

A custom style sheet is available within this repo, `style-sheet.css`. This file
is used to make the side bar a little bigger which is useful when joining
channels with long names.
