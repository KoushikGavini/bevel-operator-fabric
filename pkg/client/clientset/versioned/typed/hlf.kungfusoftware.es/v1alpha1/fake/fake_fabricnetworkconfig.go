/*
 * Copyright Kungfusoftware.es. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
// Code generated by client-gen. DO NOT EDIT.

package fake

import (
	"context"
	json "encoding/json"
	"fmt"

	v1alpha1 "github.com/kfsoftware/hlf-operator/api/hlf.kungfusoftware.es/v1alpha1"
	hlfkungfusoftwareesv1alpha1 "github.com/kfsoftware/hlf-operator/pkg/client/applyconfiguration/hlf.kungfusoftware.es/v1alpha1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	labels "k8s.io/apimachinery/pkg/labels"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	testing "k8s.io/client-go/testing"
)

// FakeFabricNetworkConfigs implements FabricNetworkConfigInterface
type FakeFabricNetworkConfigs struct {
	Fake *FakeHlfV1alpha1
	ns   string
}

var fabricnetworkconfigsResource = v1alpha1.SchemeGroupVersion.WithResource("fabricnetworkconfigs")

var fabricnetworkconfigsKind = v1alpha1.SchemeGroupVersion.WithKind("FabricNetworkConfig")

// Get takes name of the fabricNetworkConfig, and returns the corresponding fabricNetworkConfig object, and an error if there is any.
func (c *FakeFabricNetworkConfigs) Get(ctx context.Context, name string, options v1.GetOptions) (result *v1alpha1.FabricNetworkConfig, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewGetAction(fabricnetworkconfigsResource, c.ns, name), &v1alpha1.FabricNetworkConfig{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.FabricNetworkConfig), err
}

// List takes label and field selectors, and returns the list of FabricNetworkConfigs that match those selectors.
func (c *FakeFabricNetworkConfigs) List(ctx context.Context, opts v1.ListOptions) (result *v1alpha1.FabricNetworkConfigList, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewListAction(fabricnetworkconfigsResource, fabricnetworkconfigsKind, c.ns, opts), &v1alpha1.FabricNetworkConfigList{})

	if obj == nil {
		return nil, err
	}

	label, _, _ := testing.ExtractFromListOptions(opts)
	if label == nil {
		label = labels.Everything()
	}
	list := &v1alpha1.FabricNetworkConfigList{ListMeta: obj.(*v1alpha1.FabricNetworkConfigList).ListMeta}
	for _, item := range obj.(*v1alpha1.FabricNetworkConfigList).Items {
		if label.Matches(labels.Set(item.Labels)) {
			list.Items = append(list.Items, item)
		}
	}
	return list, err
}

// Watch returns a watch.Interface that watches the requested fabricNetworkConfigs.
func (c *FakeFabricNetworkConfigs) Watch(ctx context.Context, opts v1.ListOptions) (watch.Interface, error) {
	return c.Fake.
		InvokesWatch(testing.NewWatchAction(fabricnetworkconfigsResource, c.ns, opts))

}

// Create takes the representation of a fabricNetworkConfig and creates it.  Returns the server's representation of the fabricNetworkConfig, and an error, if there is any.
func (c *FakeFabricNetworkConfigs) Create(ctx context.Context, fabricNetworkConfig *v1alpha1.FabricNetworkConfig, opts v1.CreateOptions) (result *v1alpha1.FabricNetworkConfig, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewCreateAction(fabricnetworkconfigsResource, c.ns, fabricNetworkConfig), &v1alpha1.FabricNetworkConfig{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.FabricNetworkConfig), err
}

// Update takes the representation of a fabricNetworkConfig and updates it. Returns the server's representation of the fabricNetworkConfig, and an error, if there is any.
func (c *FakeFabricNetworkConfigs) Update(ctx context.Context, fabricNetworkConfig *v1alpha1.FabricNetworkConfig, opts v1.UpdateOptions) (result *v1alpha1.FabricNetworkConfig, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateAction(fabricnetworkconfigsResource, c.ns, fabricNetworkConfig), &v1alpha1.FabricNetworkConfig{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.FabricNetworkConfig), err
}

// UpdateStatus was generated because the type contains a Status member.
// Add a +genclient:noStatus comment above the type to avoid generating UpdateStatus().
func (c *FakeFabricNetworkConfigs) UpdateStatus(ctx context.Context, fabricNetworkConfig *v1alpha1.FabricNetworkConfig, opts v1.UpdateOptions) (*v1alpha1.FabricNetworkConfig, error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateSubresourceAction(fabricnetworkconfigsResource, "status", c.ns, fabricNetworkConfig), &v1alpha1.FabricNetworkConfig{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.FabricNetworkConfig), err
}

// Delete takes name of the fabricNetworkConfig and deletes it. Returns an error if one occurs.
func (c *FakeFabricNetworkConfigs) Delete(ctx context.Context, name string, opts v1.DeleteOptions) error {
	_, err := c.Fake.
		Invokes(testing.NewDeleteActionWithOptions(fabricnetworkconfigsResource, c.ns, name, opts), &v1alpha1.FabricNetworkConfig{})

	return err
}

// DeleteCollection deletes a collection of objects.
func (c *FakeFabricNetworkConfigs) DeleteCollection(ctx context.Context, opts v1.DeleteOptions, listOpts v1.ListOptions) error {
	action := testing.NewDeleteCollectionAction(fabricnetworkconfigsResource, c.ns, listOpts)

	_, err := c.Fake.Invokes(action, &v1alpha1.FabricNetworkConfigList{})
	return err
}

// Patch applies the patch and returns the patched fabricNetworkConfig.
func (c *FakeFabricNetworkConfigs) Patch(ctx context.Context, name string, pt types.PatchType, data []byte, opts v1.PatchOptions, subresources ...string) (result *v1alpha1.FabricNetworkConfig, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewPatchSubresourceAction(fabricnetworkconfigsResource, c.ns, name, pt, data, subresources...), &v1alpha1.FabricNetworkConfig{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.FabricNetworkConfig), err
}

// Apply takes the given apply declarative configuration, applies it and returns the applied fabricNetworkConfig.
func (c *FakeFabricNetworkConfigs) Apply(ctx context.Context, fabricNetworkConfig *hlfkungfusoftwareesv1alpha1.FabricNetworkConfigApplyConfiguration, opts v1.ApplyOptions) (result *v1alpha1.FabricNetworkConfig, err error) {
	if fabricNetworkConfig == nil {
		return nil, fmt.Errorf("fabricNetworkConfig provided to Apply must not be nil")
	}
	data, err := json.Marshal(fabricNetworkConfig)
	if err != nil {
		return nil, err
	}
	name := fabricNetworkConfig.Name
	if name == nil {
		return nil, fmt.Errorf("fabricNetworkConfig.Name must be provided to Apply")
	}
	obj, err := c.Fake.
		Invokes(testing.NewPatchSubresourceAction(fabricnetworkconfigsResource, c.ns, *name, types.ApplyPatchType, data), &v1alpha1.FabricNetworkConfig{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.FabricNetworkConfig), err
}

// ApplyStatus was generated because the type contains a Status member.
// Add a +genclient:noStatus comment above the type to avoid generating ApplyStatus().
func (c *FakeFabricNetworkConfigs) ApplyStatus(ctx context.Context, fabricNetworkConfig *hlfkungfusoftwareesv1alpha1.FabricNetworkConfigApplyConfiguration, opts v1.ApplyOptions) (result *v1alpha1.FabricNetworkConfig, err error) {
	if fabricNetworkConfig == nil {
		return nil, fmt.Errorf("fabricNetworkConfig provided to Apply must not be nil")
	}
	data, err := json.Marshal(fabricNetworkConfig)
	if err != nil {
		return nil, err
	}
	name := fabricNetworkConfig.Name
	if name == nil {
		return nil, fmt.Errorf("fabricNetworkConfig.Name must be provided to Apply")
	}
	obj, err := c.Fake.
		Invokes(testing.NewPatchSubresourceAction(fabricnetworkconfigsResource, c.ns, *name, types.ApplyPatchType, data, "status"), &v1alpha1.FabricNetworkConfig{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.FabricNetworkConfig), err
}
